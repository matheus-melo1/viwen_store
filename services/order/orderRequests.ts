import { IOrderCustomer } from "@/models/order/IOrderModel";
import {  HttpCreateOrderUser, HttpGetOrderUser } from "../http/endpoints/order";

export async function postOrderCustomer(orderData: IOrderCustomer) {
  try {
    const response = await HttpCreateOrderUser(orderData);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getOrderCustomer() {
  try {
    const response = await HttpGetOrderUser();
    return response.data;
  } catch (err) {
    console.log(err);
  }
}