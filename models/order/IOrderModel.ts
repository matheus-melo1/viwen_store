export interface IProductsOrder {
  produtoId: number;
  quantidade: number;
}

export interface IOrderCustomer {
  usuarioId: number;
  produtos: IProductsOrder[];
  quantidade: number;
  valorPedido: number;
  status: string;
}

export interface IResponseOrderCustomer {
  id: number;
  usuarioId: number;
  produto: IProductsOrder[];
  quantidade: number;
  valorPedido: number;
  status: string;
}
