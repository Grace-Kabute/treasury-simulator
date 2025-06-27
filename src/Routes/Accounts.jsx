import BalanceCard from "../components/BalanceCard";
import { useState } from "react";


const startingAccounts = [
  { name: "Mpesa_KES_1", currency: "KES", balance: 120000 },
  { name: "Bank_USD_1", currency: "USD", balance: 4300 },
  { name: "Wallet_KES_1", currency: "KES", balance: 850000 },
  { name: "Bank_USD_2", currency: "USD", balance: 22500 },
  { name: "Wallet_USD_2", currency: "USD", balance: 9300 },
  { name: "Bank_NGN_3", currency: "NGN", balance: 1800000 },
  { name: "Wallet_NGN_3", currency: "NGN", balance: 950000 },
  { name: "Mpesa_KES_2", currency: "KES", balance: 1000000 },
  { name: "Bank_KES_4", currency: "KES", balance: 2500000 },
  { name: "Reserve_NGN_1", currency: "NGN", balance: 2200000 },
];


const Accounts = () => {
  const [accounts, setAccounts] = useState(startingAccounts);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {startingAccounts.map((account, i) => (
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
