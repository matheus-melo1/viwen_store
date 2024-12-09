import { ICreatePostProps, IGetLoginProps, IPostResponseLogin } from "@/models/users/IUsersModel";
import http from "@/services/axios";

export async function HttpPostCreateUser(infos: ICreatePostProps) {
  return await http.post<ICreatePostProps>("/cadastro", infos);
}

export async function HttpPostLoginUser(infos: IGetLoginProps) {
  return await http.post<IPostResponseLogin[]>("/login", infos);
}
