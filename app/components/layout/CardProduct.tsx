/* eslint-disable @next/next/no-img-element */
import {
  FaCartPlus,
  FaCreditCard,
  FaMoneyBill,
} from "react-icons/fa6";


interface CardProductProps {
  className?: string;
}

export default function CardProduct({ className }: CardProductProps) {
  return (
    <div className={`${className} flex h-full w-[270px] flex-col gap-2 rounded-xl bg-white p-2 text-zinc-800`}>
      {/* <Image width={300} height={300} src="/images/banner_top.png" alt="" /> */}
      <div className="h-[250px] w-full">
        <img
          className="h-full w-full rounded-xl"
          src="https://droper-media.us-southeast-1.linodeobjects.com/15122023194634682.webp"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <span className="rounded-full bg-black px-2 text-sm uppercase text-white">
          CAMISETA
        </span>
        <h2 className="text-lg capitalize">Sufgang Basic Azul 5.4</h2>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <h2 className="text-2xl font-bold text-[#009393]">R$ 59,90</h2>
        <span className="flex items-center justify-center gap-1 text-sm">
          <FaCreditCard className="h-4 w-4 text-zinc-700" /> 6x de R$ 9,90
        </span>
      </div>
      <div className="flex items-center gap-1 rounded-full bg-zinc-300 p-1">
        <button className="ease flex h-full w-1/2 items-center justify-center rounded-full bg-white px-1 py-1 duration-200 hover:bg-black hover:text-white">
          <FaCartPlus className="h-5 w-5" />
        </button>
        <button className="ease flex h-full w-full items-center justify-center gap-1 rounded-full bg-white px-1 py-1 duration-200 hover:bg-black hover:text-white">
          <FaMoneyBill className="h-5 w-5" />
          Comprar
        </button>
      </div>
    </div>
  );
}
