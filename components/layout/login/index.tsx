"use client";

import InputText from "@/components/common/InputText";
import DefaultDialog from "@/components/dialog/DefaultDialog";
import DialogContent from "@/components/dialog/DialogContent";
import DialogTitle from "@/components/dialog/DialogTitle";
import useGlobalContext from "@/hooks/useGlobalContext";
import { Key } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { MouseEvent, useState } from "react";
import { postLogin } from "@/services/users/login";
import useAuth from "@/hooks/useAuth";
import Button from "@/components/common/Button";

export default function Login() {
  const { loginDialog, setLoginDialog, setRegisterDialog } = useGlobalContext();
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const loginFiltersSchema = z.object({
    email: z.string().email("Email inválido").toLowerCase(),
    password: z.string().min(5, "Mínimo 5 caracteres"),
  });

  type LoginFilteredSchema = z.infer<typeof loginFiltersSchema>;

  const { handleSubmit, register, formState } = useForm<LoginFilteredSchema>({
    resolver: zodResolver(loginFiltersSchema),
  });
  const errors = formState.errors;

  const handleSubmitForm = async (data: LoginFilteredSchema) => {
    setIsLoading(!isLoading);
    await postLogin({ email: data.email, senha: data.password })
      .then((response) => {
        setUser(response ?? {});
        setLoginDialog((prev) => !prev);
        toast.success("Sessão iniciada");
        data.email = "";
        data.password = "";
      })
      .catch(() => toast.error("Email ou senha inválido"));
    setIsLoading((prev) => !prev);
  };

  const handleOpenRegisterDialog = (
    ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    ev.preventDefault();
    setLoginDialog((prev) => !prev);
    setRegisterDialog((prev) => !prev);
  };

  const CloseDialog = () => {
    setLoginDialog((prev) => !prev);
  };

  return (
    <DefaultDialog onClose={CloseDialog} showDialog={loginDialog} size="xs">
      <DialogTitle
        onClose={() => setLoginDialog((prev) => !prev)}
        sizeFont="2"
        className="font-semibold"
      >
        Entrar
      </DialogTitle>
      <DialogContent className="flex w-full flex-col gap-2 p-6">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col gap-3"
        >
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
              Não tem conta?
            </button>
            <Button
              type="submit"
              variant="filled"
              className="w-36"
              loading={isLoading}
            >
              Iniciar Sessão
            </Button>
          </div>
        </form>
      </DialogContent>
    </DefaultDialog>
  );
}
