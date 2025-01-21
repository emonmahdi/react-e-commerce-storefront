import { useContext } from "react";
import { CartContext } from "./CartProvider";

const UseProvider = () => {
  const useProvider = useContext(CartContext);

  return useProvider;
};

export default UseProvider;
