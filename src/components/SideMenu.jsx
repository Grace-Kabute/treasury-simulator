import { NavLink } from "react-router-dom";

 const SideMenu = ({ to, icon: Icon, label }) =>{
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-2 px-3 py-2 rounded-md transition-all ${
          isActive ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </NavLink>
  );
}

export default SideMenu;