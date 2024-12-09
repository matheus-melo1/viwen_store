import { IOrderCustomer, IResponseOrderCustomer } from "@/models/order/IOrderModel";
import http from "@/services/axios";

export async function HttpCreateOrderUser(orderData: IOrderCustomer) {
  return await http.post<IOrderCustomer>("/pedidos", orderData);
}

export async function HttpGetOrderUser() {
  return await http.get<IResponseOrderCustomer[]>(`/pedidos`)
}
