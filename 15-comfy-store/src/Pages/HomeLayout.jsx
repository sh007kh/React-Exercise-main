import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
