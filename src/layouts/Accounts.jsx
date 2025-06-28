import { useState, useEffect } from "react";
import AccountsCard from "../components/AccountsCard";
import TransferForm from "../components/TransferForm";
import ActionButton from "../components/ActionButton";
import { AlignCenter, PlusCircle } from "lucide-react";
import { handleTransfer } from "../utils/TransferLogic";
import startingAccounts from "../utils/data";
import { useTransactions } from "../hooks/UseTransactions";
import '../styles.css'


const Accounts = () => {
  const [accounts, setAccounts] = useState(startingAccounts);
const [transactions, setTransactions] = useTransactions();
  const [showTransferForm, setShowTransferForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="accounts space-y-6">
      {successMessage && (
        <div>
          {successMessage}
        </div>
      )}

        <h2 className="accountName">All Accounts</h2>
      <div className="box">
        {accounts.map((account, i) => (
          <AccountsCard
            key={i}
            name={account.name}
            currency={account.currency}
            balance={account.balance}
          />
        ))}
      </div>

      <div className="accountName">
        {!showTransferForm && (
          <ActionButton
            label="Transfer Funds"
            icon={PlusCircle}
            color="green"
            onClick={() => setShowTransferForm(true)}
            style={{AlignCenter}}
          />
        )}
      </div>

      {showTransferForm && (
        <TransferForm
          accounts={accounts}
          setAccounts={setAccounts}
          setTransactions={setTransactions}
          onTransfer={(data) => {
            handleTransfer({
              ...data,
              accounts,
              setAccounts,
              setTransactions,
              setSuccessMessage,
            });
          }}
          onClose={() => setShowTransferForm(false)}
        />
      )}
    </div>
  );
};

export default Accounts;
