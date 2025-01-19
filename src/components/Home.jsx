import { Outlet } from "react-router-dom";
import App from "../App";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <App />

      <Outlet />
      <Footer />
    </div>
  );
};
