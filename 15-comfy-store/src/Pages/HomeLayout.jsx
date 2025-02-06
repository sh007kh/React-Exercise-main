import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Loading } from "../Components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
