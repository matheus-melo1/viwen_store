import { IResponseOrderCustomer } from "@/models/order/IOrderModel";
import { IPostResponseLogin } from "@/models/users/IUsersModel";
import { createContext, SetStateAction } from "react";

interface AuthContextProps {
  setUser: React.Dispatch<SetStateAction<IPostResponseLogin | undefined>>;
  user: IPostResponseLogin | undefined;
  authenticated: boolean;
  orders: IResponseOrderCustomer[] | undefined;
  ListGetCustomer: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
