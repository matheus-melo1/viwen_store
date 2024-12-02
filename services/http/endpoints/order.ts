import { IOrderCustomer } from "@/models/order/IOrderModel";
import http from "@/services/axios";

export async function createOrderUser(orderData: IOrderCustomer) {
  return await http.post<IOrderCustomer>("/pedidos", orderData);
}
