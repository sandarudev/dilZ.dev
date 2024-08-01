import React from "react";

const Portfolio = () => {
  return (
    <div className="mt-[80px] md:mt-[100px] lg:mt-[140px] xl:mt-[180px] 2xl:mt-[210px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">Portfolio</h1>
        <h3 className="font-thin mt-2 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-wider text-center">
          Each Project Is <span className="font-bold">A Unique Piece!</span> of
          Development ✨
        </h3>
      </div>

      {/* Portfolio Component */}
      <div className="text-center mt-8">Working on........</div>
    </div>
  );
};

export default Portfolio;
