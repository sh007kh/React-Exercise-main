import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../Utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/Cart/CartSlice";

const singleProductsQuery = (id) => {
  return {
    queryKey: ["featuredProducts", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductsQuery(params.id)
    );

    return { product: response.data.data };
  };
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, company, description, colors } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productId: product.id,
    productColor,
    amount,
    image,
    price,
    title,
    company,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-96 w-96 rounded-lg lg:w-full object-cover"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* colors */}
          <div className="mt-6 ">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2 ">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/* ADD TO CART */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountOptions(10)}
              </select>
            </div>
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md capitalize"
                onClick={addToCart}
              >
                add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
