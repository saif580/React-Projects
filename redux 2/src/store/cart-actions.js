import { cartShowAction } from "./cartshow";


export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-c23d8-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed.");
      }
      const data = await response.json();
      return data;
    };
    try {
      await fetchData();
    } catch (error) {
      dispatch(
        cartShowAction.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartShowAction.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-c23d8-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartShowAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        cartShowAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
