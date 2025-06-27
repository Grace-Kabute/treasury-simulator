import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 p-4 overflow-y-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
