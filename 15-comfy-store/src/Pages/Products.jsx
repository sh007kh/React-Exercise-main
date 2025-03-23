import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import { customFetch } from "../Utils";

const url = "/products";
const allProductsQuery = (queryParams) => {
  const { search, company, category, shipping, order, price } = queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      company ?? "all",
      category ?? "all",
      shipping ?? false,
      order ?? "a-z",
      price ?? "all",
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
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
