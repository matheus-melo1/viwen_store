export interface ICreatePostProps {
  nome: string;
  email: string;
  senha: string;
}

export interface IPostResponseLogin {
  id: number;
  nome: string;
  email: string;
  senha: string;
  data_criacao: Date | string;
  data_atualizacao: Date | string;
  ativo: number;
}

export interface IGetLoginProps {
  email: string;
  senha: string;
}

export interface IUserModel {
  id: number;
  nome: string;
  email: string;
  senha: string;
  data_criacao: Date | string;
  data_atualizacao: Date | string;
  ativo: boolean | number;
}
