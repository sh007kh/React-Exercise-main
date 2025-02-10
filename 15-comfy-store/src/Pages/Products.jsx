import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import { customFetch } from "../Utils";

const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, {
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
