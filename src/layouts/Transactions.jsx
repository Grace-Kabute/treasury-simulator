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
      <div>
        <h2>Recent Transactions</h2>
        <i>Refresh page to update</i>
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
        <p>No transactions yet. Please refresh page</p>
      )}
    </div>
  );
};

export default Transactions;
