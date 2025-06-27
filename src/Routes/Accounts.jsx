import BalanceCard from "../components/BalanceCard";


const accounts = [
  { name: "Mpesa_KES_1", currency: "KES", balance: 120000 },
  { name: "Bank_USD_2", currency: "USD", balance: 4300 },
  { name: "Bank_NGN_3", currency: "NGN", balance: 880000 },
];

const Accounts = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {accounts.map((account, i) => (
        <BalanceCard
          key={i}
          name={account.name}
          currency={account.currency}
          balance={account.balance}
        />
      ))}
    </div>
  );
};

export default Accounts;
