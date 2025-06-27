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

const Dashboard = () => {
  const [visibleForm, setVisibleForm] = useState(null);
  const [accounts, setAccounts] = useState(startingAccounts);
  const [transactions, setTransactions] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="dashboard-container">
      {/* Alert */}
      {successMessage && (
        <div className="bg-green-100 text-green-800 border border-green-300 p-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      {/* Total balance summary */}
      <BalanceCard
        name="Total Treasury Balance"
        icon={usd}
        currency="USD"
        balance={3421000}
        isCurrent
      />

      {/* Currency breakdown cards */}
      <div className="balances">
        <BalanceCard icon={usd} currency="USD" balance={100000} isCurrent />
        <BalanceCard icon={kes} currency="KES" balance={4000000} isCurrent />
        <BalanceCard icon={ngn} currency="NGN" balance={2500000} isCurrent />
      </div>

      {/* Send / Transfer buttons */}
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
