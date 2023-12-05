import React from "react";
import {
  SearchIcon,
} from "@chakra-ui/icons";

export default function Tools() {
  return (
    <>
      <div className="flex items-center bg-lime-300">
        <div className="flex">
            <div className="">
              <button className="text-xl px-5 py-4 hover:bg-green-500">
                Página de inicio
              </button>
              <button className="text-xl px-5 py-4 hover:bg-green-500">Tablón</button>
              <button className="text-xl px-5 py-4 hover:bg-green-500">Cursos</button>
            </div>
        </div>
        <div className="flex ml-auto items-center pr-10">
          <SearchIcon w={26} h={26} />
        </div>
      </div>
    </>
  );
}
