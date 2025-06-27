import { useState, useEffect } from "react";
import BalanceCard from "../components/BalanceCard";
import TransferForm from "../components/TransferForm";
import ActionButton from "../components/ActionButton";
import { PlusCircle } from "lucide-react";
import { handleTransfer } from "../utils/TransferLogic";
import startingAccounts from "../utils/data";

const Accounts = () => {
  const [accounts, setAccounts] = useState(startingAccounts);
  const [transactions, setTransactions] = useState([]);
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="container accounts space-y-6">
      {successMessage && (
        <div>
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account, i) => (
          <BalanceCard
            key={i}
            name={account.name}
            currency={account.currency}
            balance={account.balance}
          />
        ))}
      </div>

      <div>
        {!showTransferForm && (
          <ActionButton
            label="Transfer Funds"
            icon={PlusCircle}
            color="green"
            onClick={() => setShowTransferForm(true)}
          />
        )}
      </div>

      {showTransferForm && (
        <TransferForm
          accounts={accounts}
          setAccounts={setAccounts}
          setTransactions={setTransactions}
          onTransfer={(data) => {
            handleTransfer({ ...data, accounts, setAccounts, setTransactions });
            setSuccessMessage("Transfer successful!");
          }}
          onClose={() => setShowTransferForm(false)}
        />
      )}
    </div>
  );
};

export default Accounts;
