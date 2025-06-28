import { useTransactions } from "../hooks/UseTransactions";
import TransactionList from "../components/TransactionList";


const Reports = () => {

  const [transactions, setTransactions] = useTransactions();

  const handleDelete = (id) => {
    const updated = transactions.filter(txn => txn.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">All Transactions</h2>
      {transactions.length ? (
        <TransactionList transactions={transactions} onDelete={handleDelete} />
      ) : (
        <p className="text-gray-500">No transactions found.</p>
      )}
      
    </div>
  );
};

export default Reports;
