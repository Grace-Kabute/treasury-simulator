export function handleSend({ from, amount, note, accounts, setAccounts, setTransactions, setSuccessMessage  }) {
  if (!from || amount <= 0) {
    alert("Please enter a valid amount and source account.");
    return;
  }

  if (!Array.isArray(accounts)) {
    console.error("Accounts list is missing or invalid.");
    return;
  }
  
  const sourceIndex = accounts.findIndex((acc) => acc.name === from);
  if (sourceIndex === -1) {
    alert("Source account not found.");
    return;
  }

  const sourceAccount = accounts[sourceIndex];

  if (sourceAccount.balance < amount) {
    alert("Insufficient balance.");
    return;
  }

  if (typeof setAccounts !== "function") {
    console.error("setAccounts is not provided or not a function.");
    return;
  }

  const updatedAccounts = [...accounts];
  updatedAccounts[sourceIndex] = {
    ...sourceAccount,
    balance: sourceAccount.balance - amount,
  };

  setAccounts(updatedAccounts);

  if (typeof setTransactions === "function") {
    setTransactions((prev) => [
      ...prev,
      {
        type: "send",
        from,
        to: "External Payout",
        amount,
        note,
        currency: sourceAccount.currency,
        date: new Date().toISOString(),
      },
    ]);
  } else {
    console.warn("setTransactions is not provided, skipping transaction log.");
  }

  if (setSuccessMessage) {
    setSuccessMessage("Payout sent successfully");
  }
}
