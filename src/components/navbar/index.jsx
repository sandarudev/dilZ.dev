import React, { useState } from "react";
import { navItem } from "../../utils";
import MenuIcon from "../menuicon";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-4 py-3 items-center  ">
      <div className="text-lg xl:text-2xl 2xl:text-4xl font-bold cursor-pointer">
        <h1 className="tracking-wider ">
          dil<span className="text-2xl xl:text-3xl 2xl:text-5xl text-[#84A98C] font-bold">Z</span>{" "}
          <span className="font-thin">.dev</span>
        </h1>
      </div>
      <div className="">
        <ul className="hidden min-[768px]:flex gap-8 text-sm xl:text-lg xl:gap-[4rem] 2xl:text-2xl 2xl:gap-[8rem] cursor-pointer">
          {navItem.map((item) => (
            <li className="hover:text-[#84A98C] ease-in duration-200">
              {item.item}
            </li>
          ))}
        </ul>
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navbar;
