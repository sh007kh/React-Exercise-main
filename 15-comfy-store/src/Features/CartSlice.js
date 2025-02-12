import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.id);
      if (item) {
        item.amount += product.amount;
        return;
      }
      state.cartItems.push(product);
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      toast.success("Item added to cart");
      cartSlice.caseReducers.calculateTotals(state);
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      toast.error("Item removed from cart");
      cartSlice.caseReducers.calculateTotals(state);
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
