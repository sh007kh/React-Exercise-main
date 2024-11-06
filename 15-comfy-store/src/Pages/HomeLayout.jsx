import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <h1>Home</h1>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
