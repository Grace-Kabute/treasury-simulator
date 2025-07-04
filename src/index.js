import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './router';
import { RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
