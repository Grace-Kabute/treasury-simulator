import { useState } from "react";
import '../styles.css'


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
    <form onSubmit={handleSubmit}>
      <h2 >Transfer cash</h2>
      <div>
        <label >From Account</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="">Select account</option>
          {accounts.map((acc) => (
            <option key={acc.name} value={acc.name}>{acc.name} ({acc.currency})</option>
          ))}
        </select>
      </div>

      <div>
        <label>To Account</label>
        <select value={to} onChange={(e) => setTo(e.target.value)} >
          <option value="">Select account</option>
          {accounts.map((acc) => (
            <option key={acc.name} value={acc.name}>{acc.name} ({acc.currency})</option>
          ))}
        </select>
      </div>

      <div>
        <label >Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Note (optional)</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <button type="submit">
        Send
      </button>
      <button onClick={onClose} className="cancel-btn">Cancel</button>

    </form>
  );
};

export default TransferForm;
