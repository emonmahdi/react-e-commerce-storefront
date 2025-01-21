// import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import Cart from "../components/Cart";
import ProductDetails from "../components/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);
export default routes;
