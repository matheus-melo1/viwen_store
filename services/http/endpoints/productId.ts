import { IProductResponse, IProductResponseId } from "@/models/products/IProductModel";
import http from "@/services/axios";
import { AxiosResponse } from "axios";

export async function HttpGetProductById(id: string) {
  return await http.get<AxiosResponse, IProductResponseId>(`/produtos/${id}`);
}

export async function HttpGetAllProducts() {
  return await http.get<AxiosResponse, IProductResponse>('/produtos')
}