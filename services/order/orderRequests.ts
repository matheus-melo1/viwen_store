import { IOrderCustomer } from "@/models/order/IOrderModel";
import { createOrderUser } from "../http/endpoints/order";

export async function postOrderCustomer(orderData: IOrderCustomer) {
  try {
    const response = await createOrderUser(orderData);
    return response;
  } catch (err) {
    console.log(err);
  }
}
