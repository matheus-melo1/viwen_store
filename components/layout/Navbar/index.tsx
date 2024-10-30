import Image from "next/image";
import NavOption from "./components/NavOption";
import {
  CircleUserIcon,
  Compass,
  EllipsisVertical,
  Heart,
  House,
  ShoppingCart,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex h-full w-[330px] flex-col justify-between gap-2 bg-white p-3 font-sans max-lg:sticky max-lg:top-0 max-lg:h-24 max-lg:w-full max-lg:flex-row">
      <div className="flex flex-col max-lg:flex-row">
        <div className="mb-4 flex items-center gap-4 p-3">
          <Image width={64} height={64} src="/images/Logo_loja.png" alt="" />
          <h1 className="text-2xl font-bold text-black">Viwen Store</h1>
        </div>
        <div className="flex flex-col gap-1 max-lg:hidden">
          <NavOption icon={<House className="h-7 w-7" />} href="/">
            Início
          </NavOption>
          <NavOption icon={<Compass className="h-7 w-7" />} href="/">
            Explorar
          </NavOption>
          <NavOption icon={<Heart className="h-7 w-7" />} href="/">
            Favoritos
          </NavOption>
          <NavOption icon={<ShoppingCart className="h-7 w-7" />} href="/">
            Carrinho
          </NavOption>
          <NavOption icon={<CircleUserIcon className="h-7 w-7" />} href="/">
            Seu Perfil
          </NavOption>
        </div>
      </div>
      <div className="flex w-full items-center justify-between rounded-lg p-1 max-lg:hidden">
        <div className="flex items-center gap-3">
          <Image
            width={48}
            height={48}
            className="rounded-full"
            src="/images/user_test.png"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-zinc-600">Matheus</p>
            <p className="rounded-full bg-emerald-500 px-2 text-center text-sm text-white">
              Admin
            </p>
          </div>
        </div>
        <button>
          <EllipsisVertical className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
