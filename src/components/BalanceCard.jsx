import React from "react";

const currencyIcons = {
  KES: "🇰🇪",
  USD: "🇺🇸",
  NGN: "🇳🇬",
};

const BalanceCard = ({ name, icon, currency, balance, isCurrent = false }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-200 w-full flex flex-col gap-2">
      {name && (
        <div className="text-sm text-gray-500 truncate">
          {name}
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
          <img
          src={icon}
          alt={currencyIcons[currency]}
          width={50}
          height={50}
          className="rounded-full object-cover"
          />
          {currency}
          </div>

        {isCurrent && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
            Current
          </span>
        )}
      </div>

      <div className="text-xl font-bold text-gray-900">
        {currency} {balance.toLocaleString()}
      </div>
    </div>
  );
};

export default BalanceCard;
