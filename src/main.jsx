import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { CartProvider } from "./Provider/CartProvider.jsx";
import { Home } from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes}>
        <Home />
      </RouterProvider>
    </CartProvider>
  </StrictMode>
);
