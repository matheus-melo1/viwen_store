import Banner from "@/app/components/layout/Banner";
import CardProduct from "@/app/components/layout/CardProduct";
import Carrousel from "@/app/components/common/carrouselCommon";
import { CgSearch } from "react-icons/cg";
import IconButton from "@/app/components/common/IconButton";
import { Mail } from "lucide-react";
import { MdOutlineNotificationsNone } from "react-icons/md";

export default function Home() {
  return (
    // <div className="h-full w-full overflow-y-auto p-2">
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto p-2">
      <div className="flex w-full items-center justify-between p-2">
        <div>
          <h1 className="text-xl font-bold text-zinc-800">Roupas</h1>
          <p className="text-secondary_text">Principais ofertas</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <CgSearch className="text-secondary_text absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              id="search"
              className="text-secondary_text rounded-lg bg-white p-2 pl-10 outline-none"
              placeholder="Pesquisar"
              type="text"
            />
          </div>
          <IconButton className="bg-primary_light text-primary">
            <Mail className="h-6 w-6" />
          </IconButton>
          <IconButton className="bg-primary_light text-primary">
            <MdOutlineNotificationsNone className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
      <div className="mb-4 flex h-full w-full overflow-hidden">
        <Banner />
      </div>
      <div className="flex h-full w-full p-2">
        <Carrousel slidesToShow={6} slidesToScroll={4}>
          {Array.from({ length: 12 }, (_, index) => (
            <CardProduct key={index} />
          ))}
        </Carrousel>
      </div>
    </div>
    // </div>
  );
}
