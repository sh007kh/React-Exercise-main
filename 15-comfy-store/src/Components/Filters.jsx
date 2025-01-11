import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 py-4 px-8 rounded-md grid  gap-x-4 gap-y-8 items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center">
      {/* search */}
      <FormInput
        type="text"
        label="search here ..."
        name="search"
        size="input-sm"
      />
      {/* category */}
      <FormSelect
        label="select category"
        name=""
        list={meta.categories}
        size="select-sm"
      />
      {/* company */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* order */}
      <FormSelect
        label="select order"
        name="order"
        list={["ascending", "descending", "highest", "lowest"]}
        size="select-sm"
      />
      {/* buttons */}
      <button type="button" className="btn btn-accent btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-primary btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
