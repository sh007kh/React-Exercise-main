import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../Components";
import { Link } from "react-router-dom";

const Cart = () => {
  // temp
  const user = null;
  const numItemsInCart = useSelector((state) => {
    state.cartState.numItemsInCart;
  });
  if (numItemsInCart === 0)
    return <SectionTitle text="your shopping cart is empty" />;
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="capitalize btn btn-block btn-primary mt-8"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="capitalize btn btn-block btn-primary mt-8"
            >
              please login first
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
