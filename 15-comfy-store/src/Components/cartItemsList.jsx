import { useSelector } from "react-redux";
import CartComponent from "./CartComponent";
const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <>
      {cartItems.map((item) => {
        return <CartComponent key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};
export default CartItemsList;
