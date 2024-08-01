import React from "react";

const Hero = () => {
  return (
    <div className="w-[90vw] mx-auto mt-[30px] xl:mt-[90px] 2xl:mt-[120px] text-center   md:flex md:flex-row-reverse md:text-left lg:pl-[4rem]">
      {/* HERO IMAGE */}
      <div className="relative w-[300px] mx-auto flex justify-center">
        <img
          className=" h-[200px] w-[170px] md:h-[240px] md:w-[190px] lg:h-[260px] lg:w-[210px] xl:h-[300px] xl:w-[240px] 2xl:h-[350px] 2xl:w-[280px] rounded-md object-cover "
          src="/heroImg.jpg"
          alt="Hero Image"
        />
        <div className="  absolute top-4 right-[3rem] -z-10  border-white border-2 border-opacity-40  h-[200px] w-[170px] md:h-[240px] md:w-[190px] md:right-[2rem] lg:h-[260px] lg:w-[210px] xl:h-[300px] xl:w-[240px] 2xl:h-[350px] 2xl:w-[280px] xl:right-[0rem] 2xl:right-[-1.5rem] 2xl:top-10 lg:top-8 rounded-md object-cover " />
      </div>

      {/* DESC */}
      <div className="mt-8  w-[90vw] xl:w-[50vw] 2xl:w-[60vw] mx-auto">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold tracking-wider">
            Hello, I'm
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 2xl:mt-3 font-bold mt-1 tracking-wide">
            Sandaru <span className="text-[#84A98C] ">Silva</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] 2xl:text-[3.5rem] 2xl:mt-8 font-bold tracking-wider mt-1 xl:mt-4  ">
            <span className="font-thin ">A </span> <span> </span> Full-Stack
            Developer 🧑‍💻
          </h2>
        </div>
        <div className="flex md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl lg:mt-8 xl:mt-10 2xl:mt-[80px]  gap-4 mt-4 justify-center md:justify-start ">
          <button className="bg-[#52796F]  py-1 px-5 rounded-sm shadow-md hover:bg-[#365950] ease-in duration-200  ">
            HIRE ME
          </button>
          <button className=" py-1 px-5 rounded-sm   hover:bg-[#52796F] hover:shadow-md ease-in duration-200">
            View My Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
