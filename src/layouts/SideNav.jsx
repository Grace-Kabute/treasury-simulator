import SideMenu from "../components/SideMenu";
import BalanceCard from "../components/BalanceCard";
import { LayoutDashboard, Wallet, FileText } from "lucide-react";
import usd from '../assets/USD.jpg'


const SideNav =() =>{
  return (
    <nav>
    <BalanceCard
    name="Total Treasury Balance"
    icon={usd}
    currency="USD"
    balance={3421000}
    isCurrent
    />
      <SideMenu to="/" icon={LayoutDashboard} label="Dashboard" />
      <SideMenu to="/accounts" icon={Wallet} label="Accounts" />
      <SideMenu to="/reports" icon={FileText} label="Reports" />
    </nav>
  );
}

export default SideNav