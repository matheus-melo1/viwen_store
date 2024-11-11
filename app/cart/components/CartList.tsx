import InputText from "@/components/common/InputText";
import PageContainer from "@/components/common/PageContainer";
import Text from "@/components/common/text/text";
import Title from "@/components/common/text/title";
import useGlobalContext from "@/hooks/useGlobalContext";
import { Search } from "lucide-react";
import Image from "next/image";

// interface ICartListProps {
//   cart: IProductModel[] | undefined;
// }

export default function CartList() {

  const src =
    "https://droper-media.us-southeast-1.linodeobjects.com/15122023194634682.webp";

  return (
    <PageContainer>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary_text" />
        <InputText
          type="text"
          className="w-full border border-bg_secondary p-3 pl-10"
          placeholder="Pesquisar Produto"
        />
      </div>
      <div className="flex flex-col gap-2">
        {/* {cart?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex w-full items-center rounded-md p-2"
            >
              <Image
                src={src}
                alt={item?.nome}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                <Text className="px-2 py-1 text-xs font-bold">
                  {item?.marca}
                </Text>
                <Title size="1">{item?.nome}</Title>
              </div>
            </div>
          );
        })} */}
      </div>
    </PageContainer>
  );
}
