import React, { useEffect, useState } from "react";
import { navItem } from "../../utils";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="min-[768px]:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-slate-100 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-slate-100 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-slate-100 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>

      {isOpen && (
        <ul className="absolute left-0 top-16 w-full h-[100vh] bg-[#2F3E46] flex flex-col items-center justify-center gap-8 font-medium text-xl z-10  ">
          {navItem.map((item) => (
            <li className="hover:text-[#84A98C] ease-in duration-200 text-white">
              {item.item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuIcon;
