/* eslint-disable @next/next/no-img-element */
import { IProductModel } from "@/models/products/IProductModel";
import Link from "next/link";
import {
  FaCartPlus,
  FaCreditCard,
  FaHeart,
  FaMoneyBill,
  FaRegHeart,
} from "react-icons/fa6";
import Title from "../common/text/title";
import clsx from "clsx";

interface CardProductProps {
  className?: string;
  product: IProductModel;
  onClickSetFavorite?: (item: IProductModel) => void;
  onClickAddCart?: (item: IProductModel) => void;
  verifyFavoriteCard?: (id: string) => boolean;
}

export default function CardProduct({
  className,
  product,
  onClickSetFavorite,
  onClickAddCart,
  verifyFavoriteCard,
}: CardProductProps) {
  return (
    <Link className="h-full min-w-[270px]" href={`/product/${product.id}`}>
      <div
        className={`${className} relative flex h-full min-w-full flex-col gap-2 rounded-xl bg-white p-2 text-zinc-800`}
      >
        <button
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            onClickSetFavorite?.(product);
          }}
          className="absolute right-4 top-3 flex items-center justify-center rounded-full bg-secondary_text/15 p-2"
        >
          {verifyFavoriteCard?.(product.id) ? (
            <FaHeart
              className={clsx(
                verifyFavoriteCard?.(product.id) && "text-red-500",
                "h-5 w-5",
              )}
            />
          ) : (
            <FaRegHeart
              className={clsx(
                verifyFavoriteCard?.(product.id) && "text-red-500",
                "h-5 w-5",
              )}
            />
          )}
        </button>
        {/* <Image width={300} height={300} src="/images/banner_top.png" alt="" /> */}
        <div className="h-[250px] min-w-[250px]">
          <img
            className="h-full w-full rounded-xl object-contain"
            src="https://droper-media.us-southeast-1.linodeobjects.com/15122023194634682.webp"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <span className="rounded-full bg-black px-2 text-sm uppercase text-white">
            {product?.marca}
          </span>
          <Title size="1" className="text-lg capitalize">{product?.nome}</Title>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <Title size="1" className="text-2xl font-bold text-[#009393]">
            R$ {product?.valor}
          </Title>
          <span className="flex items-center justify-center gap-1 text-sm">
            <FaCreditCard className="h-4 w-4 text-zinc-700" /> 6x de R$ 9,90
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-zinc-300 p-1">
          <button
            onClick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              onClickAddCart?.(product);
            }}
            className="ease flex h-full w-1/2 items-center justify-center rounded-full bg-white px-1 py-1 duration-200 hover:bg-black hover:text-white"
          >
            <FaCartPlus className="h-5 w-5" />
          </button>
          <button className="ease flex h-full w-full items-center justify-center gap-[6px] rounded-full bg-white px-1 py-1 duration-200 hover:bg-black hover:text-white">
            <FaMoneyBill className="h-5 w-5" />
            Comprar
          </button>
        </div>
      </div>
    </Link>
  );
}
