import BalanceCard from "../components/BalanceCard";
import usd from '../assets/USD.jpg'
import kes from '../assets/KES.jpg'
import ngn from '../assets/NGN.jpg'


const Dashboard = () => {
  return (
    <div>
      <BalanceCard icon={usd} currency="USD" balance={100000} isCurrent />
      <BalanceCard icon={kes} currency="KES" balance={4000000} isCurrent />
      <BalanceCard icon={ngn} currency="NGN" balance={2500000} isCurrent />

    </div>
  )
}

export default Dashboard