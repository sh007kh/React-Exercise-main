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

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
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

      state.tax = 0.1 * state.cartTotal;

      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      toast.success("Item added to cart");
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
