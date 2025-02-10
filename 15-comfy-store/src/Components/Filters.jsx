import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 py-4 px-8 rounded-md grid  gap-x-4 gap-y-8 items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center">
      {/* search */}
      <FormInput
        type="text"
        label="search here ..."
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* category */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* company */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* order */}
      <FormSelect
        label="sort by"
        name="order"
        list={["ascending", "descending", "highest", "lowest"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* Range */}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      {/* form check box */}
      <FormCheckBox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* buttons */}
      <button type="submit" className="btn btn-accent btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-primary btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
