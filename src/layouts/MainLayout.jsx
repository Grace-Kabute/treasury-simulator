import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mainbox">
        <Outlet />
    </div>
  );
};

export default MainLayout;
