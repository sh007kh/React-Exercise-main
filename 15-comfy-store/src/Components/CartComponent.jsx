import React from "react";
import { formatPrice, generateAmountOptions } from "../Utils";
import { removeItem, editItem } from "../Features/Cart/CartSlice";
import { useDispatch } from "react-redux";

const CartComponent = ({ cartItem }) => {
  const { cartID, amount, price, title, image, company, productColor } =
    cartItem;
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmountInCart = (e) => {
    let newAmount = parseInt(e.target.value);
    dispatch(editItem({ cartID, amount: newAmount }));
  };
  return (
    <article
      key={cartID}
      className="flex  gap-y-4 flex-col mb-12 flex-wrap sm:flex-row border-b border-base-300 last:border-b-0 pb-6 "
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 object-cover sm:h-32 sm:w-32 rounded-lg"
      />
      {/* info */}
      <div className=" sm:ml-16 sm:w-48">
        {/* title */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* company */}
        <p className="text-sm capitalize text-neutral-content mt-2">
          {company}
        </p>
        {/* color */}
        <p className="capitalize mt-2 flex items-center text-sm gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text capitalize">amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs "
            value={amount}
            onChange={handleAmountInCart}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* remove */}
        <button
          type="button"
          className="link link-hover link-primary mt-2 capitalize text-xs"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      {/* price */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartComponent;
