// import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import Cart from "../components/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);
export default routes;
