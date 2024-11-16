import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* users */}
        {/* link */}
        <div className="flex gap-x-6 items-center justify-center">
          <Link
            to="/login"
            className="capitalize link link-hover text-xs sm:text-sm"
          >
            sign in/guest
          </Link>
          <Link
            to="/register"
            className="capitalize link link-hover text-xs sm:text-sm"
          >
            create account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
