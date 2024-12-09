"use client";

import { useState } from "react";
import { ClothingFooter, ClothingHeader } from "../components";
import DefaultDialog from "@/components/dialog/DefaultDialog";
import DialogTitle from "@/components/dialog/DialogTitle";
import DialogContent from "@/components/dialog/DialogContent";
import Text from "@/components/common/text/text";
import { FaPix } from "react-icons/fa6";
import { Barcode, CreditCard } from "lucide-react";
import useGlobalContext from "@/hooks/useGlobalContext";
import { IProductModel } from "@/models/products/IProductModel";
import toast from "react-hot-toast";
interface ParamsProps {
  params: {
    id: string;
  };
}

export default function Clothing({ params }: ParamsProps) {
  const [openDialog, setOpenDialog] = useState(false);

  const { cart, setCart } = useGlobalContext();

  const handleAddCart = (item: IProductModel, quantity: number) => {
    const prodContain = cart?.filter(
      (prod) => prod.id === item.id,
    ) as IProductModel[];
    if (prodContain.length > 0) {
      toast.error("Item já adicionado ao carrinho");
      return;
    }

    item.qtd = quantity;
    setCart((prevCart) => [...prevCart, item]);
    toast.success("Item adicionado ao carrinho");
  };

  return (
    <main className="relative flex h-full w-full flex-col items-start overflow-y-auto p-3">
      <DefaultDialog
        size="sm"
        className="border border-bg_secondary text-secondary_text"
        showDialog={openDialog}
      >
        <DialogTitle
          className="text-xl font-bold text-zinc-800"
          onClose={() => {
            setOpenDialog(!openDialog);
          }}
        >
          Formas de Pagamento
        </DialogTitle>
        <DialogContent className="flex flex-col gap-2 bg-bg_secondary p-2">
          <div className="flex w-full justify-between rounded-md bg-main_bg p-4 text-base">
            <Text className="flex items-center gap-2">
              <FaPix className="h-5 w-5" />
              Pix
            </Text>
            <Text className="font-medium text-emerald-600">R$349,90</Text>
          </div>
          <div className="flex w-full justify-between rounded-md bg-main_bg p-4 text-base">
            <Text className="flex items-center gap-2">
              <Barcode className="h-6 w-6" />
              Boleto
            </Text>
            <Text className="font-medium text-emerald-600">R$379,90</Text>
          </div>
          <div className="flex w-full justify-between rounded-md bg-main_bg p-4 text-base">
            <Text className="flex items-center gap-2">
              <CreditCard className="h-6 w-6" />
              Cartão de Credito
            </Text>
            <Text className="font-medium text-emerald-600">R$379,90</Text>
          </div>
        </DialogContent>
      </DefaultDialog>
      <ClothingHeader
        id={params.id}
        openDialog={() => setOpenDialog((prev) => !prev)}
        onClickAddCart={handleAddCart}
      />
      <ClothingFooter />
    </main>
  );
}
