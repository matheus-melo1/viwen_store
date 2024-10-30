import { ClothingFooter, ClothingHeader } from "./components";

export default function Clothing() {
  return (
    <main className="flex h-screen w-full flex-col items-start p-3 overflow-y-auto">
      <ClothingHeader />
      <ClothingFooter />
    </main>
  );
}
