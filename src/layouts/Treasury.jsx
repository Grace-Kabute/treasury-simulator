import { useState } from "react";
import BalanceCard from "../components/BalanceCard";
import usd from "../assets/USD.jpg";
import {fxRates } from "../utils/TransferLogic";
import startingAccounts from "../utils/data";



const Treasury = () => {
  const [accounts, setAccounts] = useState(startingAccounts);

  const getTotalBalance = (currency) =>
    accounts
      .filter((acc) => acc.currency === currency)
      .reduce((sum, acc) => sum + acc.balance, 0);

  const totalBalanceUSD =
    getTotalBalance("USD") +
    getTotalBalance("KES") * fxRates["KES->USD"] +
    getTotalBalance("NGN") * fxRates["NGN->USD"];

  return (
    <div className="treasury">
      <BalanceCard
        name="Total Treasury Balance"
        icon={usd}
        currency="USD"
        balance={totalBalanceUSD}
        isCurrent
        className="totalBalance"
      />
    </div>
  )
}

export default Treasury