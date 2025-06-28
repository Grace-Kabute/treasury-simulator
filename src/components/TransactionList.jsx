import React from "react";


const TransactionList = ({ transactions, onDelete = () => {} }) => {
  return (
    <div className="name">
      {transactions.length === 0 && <p>No transactions yet.</p>}

      {transactions.map(txn => (
        <div
          key={txn.id}
          className="container"
        >
            <p className="font-medium">{txn.type.toUpperCase()}</p>
            <p>
              {txn.from} ➡ {txn.to} | {txn.amount.toLocaleString()} {txn.currency}
            </p>
            <p className="text-xs text-gray-500">{new Date(txn.date).toLocaleDateString()}</p>
            {txn.note && <p className="text-xs italic">{txn.note}</p>}

          <button
            onClick={() => onDelete(txn.id)}
            className="btn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
