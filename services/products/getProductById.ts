import { getAllProducts, getProductById } from "../http/endpoints/productId";

export async function selectProductById(id: string) {
  try {
    const response = await getProductById(id);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar", error);
    throw error;
  }
}

export async function listProducts() {
  try {
    const response = await getAllProducts();
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar", error);
    throw error;
  }
}
