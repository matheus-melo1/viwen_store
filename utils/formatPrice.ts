const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format;

export default function formatPrice(price: string) {
  const priceFormatted = formatter(Number(price));
  return priceFormatted;
}
