import React from "react";

const ContactMe = () => {
  return (
    <div className="mt-[80px] md:mt-[100px] lg:mt-[140px] xl:mt-[180px] 2xl:mt-[210px] ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
          Contact Me
        </h1>
        <h3 className="font-thin text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider">
          Let's Get In <span className="font-bold">Touch!</span>💬
        </h3>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-wrap w-[90vw] mx-auto justify-around mt-9">
        <div className="cursor-pointer p-4 py-2 rounded-md hover:shadow-md  hover:bg-[#35454f] lg:mt-[30px] xl:mt-[60px] 2xl:mt-[100px]">
          <img
            src="/githubCard.png"
            alt="Logo"
            className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px]"
          />
          <h4 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-center py-1">Github</h4>
        </div>
        <div className="cursor-pointer  p-4 py-2 rounded-md hover:shadow-md  hover:bg-[#35454f] lg:mt-[30px] xl:mt-[60px] 2xl:mt-[100px]">
          <img
            src="/linkedinCard.png"
            alt="Logo"
            className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px]"
          />
          <h4 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-center py-1">LinkedIn</h4>
        </div>
        <div className="cursor-pointer  p-4 py-2 rounded-md hover:shadow-md hover:bg-[#35454f] lg:mt-[30px] xl:mt-[60px] 2xl:mt-[100px]">
          <img
            src="/facebookCard.png"
            alt="Logo"
            className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px]"
          />
          <h4 className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-center py-1">Facebook</h4>
        </div>
      </div>

      {/* LOWER CONTACT CARD */}
      <div className="mt-9 w-[90vw] mx-auto flex  pl-[100px]  max-[425px]:pl-[20px] md:pl-[200px] lg:pl-[300px] xl:pl-[400px] xl:mt-[80px] 2xl:pl-[600px] 2xl:mt-[100px] ">
        <div>
          <div className="flex justify-center items-center">
            <img
              className="w-20 h-20 rounded-full bg-[#CAD2C5]"
              src=""
              alt=""
            />
            <div className="px-3">
              <h3 className="text-xl font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl">Location</h3>
              <h4 className="font-thin text-sm lg:text-lg xl:text-xl 2xl:text-2xl ">Colombo, Sri Lanka</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 w-[90vw] mx-auto flex flex-wrap pl-[100px]  max-[425px]:pl-[20px] md:pl-[200px] lg:pl-[300px] xl:pl-[400px] xl:mt-[80px] 2xl:pl-[600px] 2xl:mt-[100px]">
        <div>
          <div className="flex justify-center items-center">
            <img
              className="w-20 h-20 rounded-full bg-[#CAD2C5]"
              src=""
              alt=""
            />
            <div className="px-3">
              <h3 className="text-xl font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl">Mail</h3>
              <h4 className="font-thin text-sm lg:text-lg xl:text-xl 2xl:text-2xl">sandarudsilva.dev@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
