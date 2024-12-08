import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../Utils";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);

  return { product: response.data.data };
};
const SingleProduct = () => {
  const { product } = useLoaderData();
  console.log(product);
  const { image, title, price, company, description, colors } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
