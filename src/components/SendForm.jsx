import React, { useState } from "react";
import '../styles.css'


const SendForm = ({ accounts, onSend, onClose }) => {
  const [from, setFrom] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = accounts.find(acc => acc.id === parseInt(from));
    if (!account) {
      alert("Invalid account selected.");
      return;
    }

    onSend({
      from: account.name,
      amount: parseFloat(amount),
      note,
    });

    setFrom("");
    setAmount("");
    setNote("");
    onClose();
  };

  return (
    <form className="send-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Send Payout</h2>

      <label>
        From Account:
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        >
          <option value="">Select an account</option>
          {accounts.map((acc) => (
            <option key={acc.id} value={acc.id}>
              {acc.name} ({acc.currency}) - {acc.balance.toLocaleString()}
            </option>
          ))}
        </select>
      </label>

      <label>
        Amount:
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label>
        Note (optional):
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <button type="submit">Send</button>
      <button type="button" onClick={onClose} className="cancel-btn">
        Cancel
      </button>
    </form>
  );
};

export default SendForm;
