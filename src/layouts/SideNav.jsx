import SideMenu from "../components/SideMenu";
import { LayoutDashboard, Wallet, FileText } from "lucide-react";

const SideNav =() =>{
  return (
    <nav className="flex flex-col space-y-2 p-4 w-64 bg-gray-50 border-r">
      <SideMenu to="/" icon={LayoutDashboard} label="Dashboard" />
      <SideMenu to="/accounts" icon={Wallet} label="Accounts" />
      <SideMenu to="/reports" icon={FileText} label="Reports" />
    </nav>
  );
}

export default SideNav