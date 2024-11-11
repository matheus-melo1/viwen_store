export interface IProductModel {
  id: string;
  nome: string;
  cor: string;
  tamanho: string;
  valor: string;
  marca: string;
  qtd: number;
  estoque?: number;
}

export interface IProductResponseId {
  data: IProductModel | undefined;
  config: object;
  headers: object;
  status: number;
  statusText: string;
  request: object;
}

export interface IProductResponse {
  data: IProductModel[] | undefined;
  config: object;
  headers: object;
  status: number;
  statusText: string;
  request: object;
}