import { HttpGetAllProducts, HttpGetProductById } from "../http/endpoints/productId";

export async function selectProductById(id: string) {
  try {
    const response = await HttpGetProductById(id);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar", error);
    throw error;
  }
}

export async function listProducts() {
  try {
    const response = await HttpGetAllProducts();
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar", error);
    throw error;
  }
}
