import React from "react";

const ActionButton = ({ label, onClick, icon: Icon, color = "blue" }) => {
  return (
    <button onClick={onClick} className={`action-button ${color}`}>
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
