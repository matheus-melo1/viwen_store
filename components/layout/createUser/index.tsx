"use client";

import InputText from "@/components/common/InputText";
import DefaultDialog from "@/components/dialog/DefaultDialog";
import DialogContent from "@/components/dialog/DialogContent";
import DialogTitle from "@/components/dialog/DialogTitle";
import useGlobalContext from "@/hooks/useGlobalContext";
import { CircleUserRound, Key } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { registerUser } from "@/services/users/login";
import { MouseEvent, useState } from "react";
import Button from "@/components/common/Button";

export default function RegisterUser() {
  const { registerDialog, setRegisterDialog, setLoginDialog } =
    useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  const registerFiltersSchema = z.object({
    nome: z.string().min(3, "Mínimo 3 caracteres").toLowerCase(),
    email: z.string().email("Email inválido").toLowerCase(),
    password: z.string().min(5, "Mínimo 5 caracteres"),
  });

  type RegisterFilteredSchema = z.infer<typeof registerFiltersSchema>;

  const { handleSubmit, register, formState } = useForm<RegisterFilteredSchema>(
    {
      resolver: zodResolver(registerFiltersSchema),
    },
  );
  const errors = formState.errors;

  const handleSubmitForm = async (data: RegisterFilteredSchema) => {
    setIsLoading((prev) => !prev);
    await registerUser({
      nome: data.nome,
      email: data.email,
      senha: data.password,
    })
      .then(() => {
        toast.success("Sua conta foi criada");
        setRegisterDialog((prev) => !prev);
        setLoginDialog((prev) => !prev);
      })
      .catch(() => toast.error("Erro ao criar conta"));
    setIsLoading((prev) => !prev);
  };

  const handleOpenRegisterDialog = (
    ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    ev.preventDefault();
    setRegisterDialog((prev) => !prev);
    setLoginDialog((prev) => !prev);
  };

  return (
    <DefaultDialog
      onClose={() => setRegisterDialog((prev) => !prev)}
      showDialog={registerDialog}
      size="xs"
    >
      <DialogTitle
        onClose={() => setRegisterDialog((prev) => !prev)}
        sizeFont="2"
        className="font-semibold"
      >
        Criar Conta
      </DialogTitle>
      <DialogContent className="flex w-full flex-col gap-2 p-6">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col gap-3"
        >
          <InputText
            icon={<CircleUserRound className="h-full w-full" />}
            variant="outlined"
            type="text"
            className="w-full text-base"
            placeholder="Nome"
            useRegister={register("nome")}
            useError={errors.nome}
            errorMessage={errors.nome?.message}
          />
          <InputText
            icon={<MdEmail className="h-full w-full" />}
            variant="outlined"
            type="text"
            className="w-full text-base"
            placeholder="Email"
            useRegister={register("email")}
            useError={errors.email}
            errorMessage={errors.email?.message}
          />
          <InputText
            icon={<Key className="h-full w-full" />}
            variant="outlined"
            type="password"
            className="w-full text-base"
            placeholder="Senha"
            useRegister={register("password")}
            useError={errors.password}
            errorMessage={errors.password?.message}
          />
          <div className="mt-4 flex w-full justify-between">
            <button
              onClick={handleOpenRegisterDialog}
              className="p-0 text-sm text-primary duration-150 hover:text-secondary_text"
            >
              Já tenho conta
            </button>
            <Button
              type="submit"
              variant="filled"
              className="w-36"
              loading={isLoading}
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </DialogContent>
    </DefaultDialog>
  );
}
