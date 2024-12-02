import { ICreatePostProps, IGetLoginProps } from "@/models/users/IUsersModel";
import { HttpPostCreateUser, HttpPostLoginUser } from "../http/endpoints/users";

export async function postLogin(infos: IGetLoginProps) {
  try {
    const response = await HttpPostLoginUser(infos);
    return response.data[0];
  } catch (error) {
    console.error("Erro ao buscar", error);
    throw error;
  }
}

export async function registerUser(infos: ICreatePostProps) {
  try {
    const response = await HttpPostCreateUser(infos);
    return response;
  } catch (error) {
    console.error("Erro ao buscar", error);
    throw error;
  }
}
