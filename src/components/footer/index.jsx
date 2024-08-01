import React from "react";

const Footer = () => {
  return (
    <div className="mt-[70px] flex justify-between  items-center px-4 py-4 xl:mt-[100px] 2xl:mt-[130px]">
      <div>
        <h2 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          Copyright 2024. All Right Reserved
        </h2>
      </div>
      <div className="flex gap-2 md:gap-3 lg:gap-5 xl:gap-8 2xl:gap-10">
        <img
          src="/linkedinCard.png"
          alt=""
          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
        />
        <img
          src="/facebookCard.png"
          alt=""
          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
        />
        <img
          src="/githubCard.png"
          alt=""
          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
        />
      </div>
    </div>
  );
};

export default Footer;
