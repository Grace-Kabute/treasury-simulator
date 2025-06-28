import { useState } from "react";

const TransferForm = ({ accounts, onTransfer, onClose }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTransfer({ from, to, amount: parseFloat(amount), note });
    setFrom(""); setTo(""); setAmount(""); setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-sm border space-y-4">
      <h2 className="form-title">Transfer cash</h2>
      <div>
        <label className="block text-sm font-medium">From Account</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select account</option>
          {accounts.map((acc) => (
            <option key={acc.name} value={acc.name}>{acc.name} ({acc.currency})</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">To Account</label>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select account</option>
          {accounts.map((acc) => (
            <option key={acc.name} value={acc.name}>{acc.name} ({acc.currency})</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Note (optional)</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
      <button onClick={onClose} className="cancel-btn">Cancel</button>

    </form>
  );
};

export default TransferForm;
