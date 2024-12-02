import Animate from "@/components/common/Animate";
import Text from "@/components/common/text/text";
import { IPostResponseLogin } from "@/models/users/IUsersModel";
import { format } from "date-fns";

interface MyProfileProps {
  user: IPostResponseLogin | undefined;
}

/* eslint-disable @next/next/no-img-element */
export default function MyProfile({ user }: MyProfileProps) {
  return (
    <Animate className="flex w-full gap-4 p-4">
      <div className="flex items-center gap-3 text-zinc-800 max-sm:flex-col max-sm:items-start">
        <img
          className="h-28 w-28 max-sm:h-14 max-sm:w-14"
          src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png"
          alt=""
        />
        <div className="flex gap-10 max-sm:flex-col">
          <div className="flex flex-col gap-[2px]">
            <Text className="text-xs font-bold">NOME</Text>
            <Text className="text-lg capitalize">
              {user?.nome ?? "Nome não informado."}
            </Text>
          </div>
          <div className="flex flex-col gap-[2px]">
            <Text className="text-xs font-bold">EMAIL</Text>
            <Text className="text-lg">
              {user?.email ?? "Email não informado"}
            </Text>
          </div>
          <div className="flex flex-col gap-[2px]">
            <Text className="text-xs font-bold">DATA DE CRIAÇÃO</Text>
            <Text className="text-lg">
              {format(new Date(user?.data_criacao ?? new Date()), "dd/MM/yyyy")}
            </Text>
          </div>
        </div>
      </div>
    </Animate>
  );
}
