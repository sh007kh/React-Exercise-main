import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 flex flex-col gap-y-4 bg-base-100 shadow-lg"
      >
        <FormInput type="text" name="username" label="username" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center capitalize">
          already a member?
          <Link
            to="/Login"
            className="capitalize ml-2 link link-hover link-primary "
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
