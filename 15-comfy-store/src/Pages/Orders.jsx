import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../Utils";
import { toast } from "react-toastify";
import { ComplexPaginationContainer, SectionTitle } from "../Components";
import OrdersList from "../Components/OrdersList";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};
export const loader =
  (store, clientQuery) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to view your orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await clientQuery.ensureQueryData(
        ordersQuery(params, user)
      );
      // console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");

      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="You have no orders" />;
  }
  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
