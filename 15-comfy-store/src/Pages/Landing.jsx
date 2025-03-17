import { FeaturedProducts, Hero } from "../Components";
import { customFetch } from "../Utils";
const url = "./products?featured=true";
export const loader = async () => {
  const response = await customFetch(url);

  const products = response.data.data;
  return { products };
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
