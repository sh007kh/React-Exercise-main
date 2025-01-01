import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../Utils";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id, attributes } = product;
        const { title, price, image, company } = attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            to={`/products/${id}`}
            key={id}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 sm:w-32 rounded-lg object-cover group-hover:scale-105 transition duration-300 "
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <h4 className="text-md  capitalize text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
