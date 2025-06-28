import { useTransactions } from "../hooks/UseTransactions";
import TransactionList from "../components/TransactionList";
import { useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useTransactions();
  const [showAll, setShowAll] = useState(false);

  const handleDelete = (id) => {
    const updated = transactions.filter((txn) => txn.id !== id);
    setTransactions(updated);
  };

  const displayedTxns = showAll ? transactions : transactions.slice(0, 5);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Recent Transactions</h2>
        {transactions.length > 5 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="action-button"
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        )}
      </div>

      {displayedTxns.length > 0 ? (
        <TransactionList
          transactions={displayedTxns}
          onDelete={handleDelete}
        />
      ) : (
        <p className="text-gray-500">No transactions yet.</p>
      )}
    </div>
  );
};

export default Transactions;
