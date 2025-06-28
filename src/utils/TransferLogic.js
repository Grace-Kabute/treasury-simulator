export const fxRates = {
  "USD->KES": 129.25,
  "KES->USD": 1 / 129.25,
  "USD->NGN": 1551,
  "NGN->USD": 1 / 1551,
  "KES->NGN": 11.95,
  "NGN->KES": 1 / 11.95,
};

export function handleTransfer({
  from,
  to,
  amount,
  note,
  accounts,
  setAccounts,
  setTransactions,
  setSuccessMessage,
}) {
  if (!from || !to || !accounts || typeof amount !== "number") {
    console.error("Missing or invalid transfer parameters.");
    return;
  }

  if (from === to) {
    alert("Cannot transfer to the same account.");
    return;
  }

  const fromAcc = accounts.find((acc) => acc.name === from);
  const toAcc = accounts.find((acc) => acc.name === to);

  if (!fromAcc || !toAcc) {
    alert("Invalid account selection.");
    return;
  }

  if (amount <= 0) {
    alert("Amount must be greater than 0.");
    return;
  }

  if (fromAcc.balance < amount) {
    alert("Insufficient funds.");
    return;
  }

  let convertedAmount = amount;

  if (fromAcc.currency !== toAcc.currency) {
    const rateKey = `${fromAcc.currency}->${toAcc.currency}`;
    const rate = fxRates[rateKey];
    if (!rate) {
      alert(`No FX rate available for ${rateKey}.`);
      return;
    }
    convertedAmount = amount * rate;
  }

  const updatedAccounts = accounts.map((acc) => {
    if (acc.name === from) return { ...acc, balance: acc.balance - amount };
    if (acc.name === to) return { ...acc, balance: acc.balance + convertedAmount };
    return acc;
  });

  setAccounts(updatedAccounts);

  if (typeof setTransactions === "function") {
    const transaction = {
      id: Date.now(),
      type: "transfer",
      from,
      to,
      amount,
      convertedAmount,
      fromCurrency: fromAcc.currency,
      toCurrency: toAcc.currency,
      note,
      timestamp: new Date().toISOString(),
    };

    setTransactions((prev) => [transaction, ...prev]);
  }

  if (typeof setSuccessMessage === "function") {
    setSuccessMessage("Transfer complete");
  }
}
