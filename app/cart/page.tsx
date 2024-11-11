import Main from "@/components/common/Main";
import Title from "@/components/common/text/title";
import CartList from "./components/CartList";
import useGlobalContext from "@/hooks/useGlobalContext";

export default function Cart() {
  const { cart } = useGlobalContext();
  console.log(cart);

  return (
    <Main className="flex w-full flex-col gap-1 text-bg_variant">
      <Title className="p-4 font-bold" size="3">
        Carrinho
      </Title>
      <CartList />
    </Main>
  );
}
