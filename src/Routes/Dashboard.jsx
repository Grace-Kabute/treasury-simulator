import { useState, useEffect } from "react";
import BalanceCard from "../components/BalanceCard";
import usd from "../assets/USD.jpg";
import kes from "../assets/KES.jpg";
import ngn from "../assets/NGN.jpg";
import ActionButton from "../components/ActionButton";
import { Send, PlusCircle } from "lucide-react";
import TransferForm from "../components/TransferForm";
import SendForm from "../components/SendForm";
import startingAccounts from "../utils/data";
import { handleTransfer } from "../utils/TransferLogic";
import { handleSend } from "../utils/SendLogic";
import { useTransactions } from "../hooks/UseTransactions";

const Dashboard = () => {
  const [visibleForm, setVisibleForm] = useState(null);
  const [accounts, setAccounts] = useState(startingAccounts);
  const [transactions, setTransactions] = useTransactions();
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const getTotalBalance = (currency) =>
    accounts
      .filter((acc) => acc.currency === currency)
      .reduce((sum, acc) => sum + acc.balance, 0);



  return (
    <div className="dashboard">
      {successMessage && (
        <div className="bg-green-100 text-green-800 border border-green-300 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      {/* Currency Balances */}
      <div className="balances">
        <BalanceCard icon={usd} currency="USD" balance={getTotalBalance("USD")} isCurrent />
        <BalanceCard icon={kes} currency="KES" balance={getTotalBalance("KES")} isCurrent />
        <BalanceCard icon={ngn} currency="NGN" balance={getTotalBalance("NGN")} isCurrent />
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <ActionButton
          label="Send"
          icon={Send}
          onClick={() => setVisibleForm("send")}
          color="blue"
        />
        <ActionButton
          label="Transfer"
          icon={PlusCircle}
          onClick={() => setVisibleForm("transfer")}
          color="green"
        />
      </div>

      {/* Forms */}
      <div style={{ marginTop: "20px" }}>
        {visibleForm === "send" && (
          <SendForm
            accounts={accounts}
            setAccounts={setAccounts}
            setTransactions={setTransactions}
            onSend={(data) =>
              handleSend({
                ...data,
                accounts,
                setAccounts,
                setTransactions,
                setSuccessMessage,
              })
            }
            onClose={() => setVisibleForm(null)}
          />
        )}

        {visibleForm === "transfer" && (
          <TransferForm
            accounts={accounts}
            setAccounts={setAccounts}
            setTransactions={setTransactions}
            onTransfer={(data) =>
              handleTransfer({
                ...data,
                accounts,
                setAccounts,
                setTransactions,
                setSuccessMessage,
              })
            }
            onClose={() => setVisibleForm(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
