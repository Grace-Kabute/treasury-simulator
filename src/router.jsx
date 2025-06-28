import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import App from "./App";
import Accounts from "./layouts/Accounts";
import Reports from "./Routes/Reports";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/reports",
        element: <Reports />,
      }
    ],
  },
]);