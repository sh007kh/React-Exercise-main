import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl  text-primary">404</h1>
            <h2 className="text-4xl py-2 capitalize font-bold">
              oops! page not found
            </h2>
            <p className="py-6 capitalize">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <Link to="/" className="btn btn-secondary capitalize text-lg">
              go back home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="grid min-h-screen items-center justify-center px-8">
      <h1 className="text-3xl capitalize">sorry there was an error....</h1>
    </section>
  );
};

export default Error;
