import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Features/User/UserSlice";
import { clearCart } from "../Features/Cart/CartSlice";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
    dispatch(clearCart());
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          // user
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          // links
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
        )}
      </div>
    </header>
  );
};

export default Header;
