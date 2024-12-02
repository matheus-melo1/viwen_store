import { CircleUserIcon, Compass, Heart, House } from "lucide-react";
import React from "react";

interface Route {
  path: string;
  name: string;
  icon: React.ReactElement;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "Início",
    icon: React.createElement(House, { className: "h-7 w-7" }),
  },
  {
    path: "/explorer",
    name: "Explorar",
    icon: React.createElement(Compass, { className: "h-7 w-7" }),
  },
  {
    path: "/favorite",
    name: "Favoritos",
    icon: React.createElement(Heart, { className: "h-7 w-7" }),
  },
  {
    path: "/profile",
    name: "Perfil",
    icon: React.createElement(CircleUserIcon, { className: "h-7 w-7" }),
  },
];
