import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-10 md:mt-[100px] lg:mt-[140px] xl:mt-[180px] 2xl:mt-[210px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">About Me</h1>
        <h3 className="font-thin text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wider">
          Let's Unwind <span className="font-bold">My Story!</span>🧩
        </h3>
      </div>

      <div className="gap-2 mt-8 md:flex  md:w-[90vw] lg:w-[85vw] md:mx-auto lg:mt-[60px] 2xl:mt-[100px]">
        {/* IMAGE */}
        <div className="w-[300px] mx-auto relative   flex justify-center">
          <img
            className="relative h-[200px] w-[170px] lg:h-[240px] lg:w-[210px] xl:h-[300px] xl:w-[280px] 2xl:h-[340px] 2xl:w-[320px] rounded-md object-cover "
            src="/graduationImg.jpg"
            alt="Hero Image"
          />
          <div className="absolute top-4 right-[3rem] md:right-[2rem] -z-10 bottom-0  border-white border-2 border-opacity-40  h-[200px] w-[170px] lg:h-[240px] lg:w-[210px] xl:h-[300px] xl:w-[250px] 2xl:h-[340px] 2xl:w-[270px] lg:top-8 lg:right-[1.5rem] xl:top-8 xl:right-[1rem] 2xl:top-10 2xl:right-[1rem] rounded-md object-cover " />
        </div>

        {/* DESC */}
        <div className="w-[90vw]  mx-auto mt-9 text-center md:text-left lg:pl-5">
          <h2 className="font-bold text-lg lg:text-2xl xl:text-3xl 2xl:text-5xl">Who I Am? 😁 </h2>
          <p className="text-sm font-extralight mt-6 text-justify lg:text-lg xl:text-xl 2xl:text-2xl ">
            I'm <span className="font-bold">Sandaru Silva</span>, a Software
            Engineer based in Sri Lanka with a{" "}
            <span className="font-bold">
              BSc (Hons) in Software Engineering from the University of
              Plymouth, UK.
            </span>
            My passion lies in turning real-world challenges into impactful IT
            solutions, specializing in{" "}
            <span className="font-bold">Full-Stack and Web Development.</span>
          </p>

          {/* SKILLS */}
          <h2 className="font-bold text-lg mt-7 xl:mt-[50px] lg:text-2xl xl:text-3xl 2xl:text-5xl">Skills 🎯 </h2>
          <div className="flex gap-4 lg:gap-6 xl:gap-10 flex-wrap justify-center  mt-6 md:justify-start">
            <img
              src="/htmlLogo.png"
              alt="Logo"
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
            />
            <img
              src="/cssLogo.png"
              alt="Logo"
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
            />
            <img
              src="/jsLogo.png"
              alt="Logo"
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
            />
            <img
              src="/reactLogo.png"
              alt="Logo"
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
            />
            <img
              src="/nodejsLogo.png"
              alt="Logo"
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
            />
            <img
              src="/netLogo.png"
              alt="Logo"
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
            />
            <img
              src="/figmaLogo.png"
              alt="Logo"
              className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px]"
            />
          </div>
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="mt-9 px-2 w-[90vw] mx-auto text-center md:w-[90vw] md:mx-auto md:text-left lg:w-[85vw] lg:mt-[50px] xl:mt-[80px]">
        <h2 className="text-lg font-bold lg:text-2xl xl:text-3xl 2xl:text-5xl">
          Community Engagement 🫂
        </h2>
        <p className="text-sm mt-2 font-thin text-justify lg:text-lg xl:text-xl xl:mt-6 2xl:text-2xl ">
          As an active IEEE member, I've contributed to events like{" "}
          <span className="font-bold">Duothon</span> and
          <span className="font-bold">IEEE Extreme</span>. In 2021-2022, I
          served as <span className="font-bold">Volunteer Coordinator</span>{" "}
          within the{" "}
          <span className="font-bold">IEEE Student Branch To Board.</span>
        </p>
      </div>

      {/*  TECH STORYTELLER */}
      <div className="mt-9 px-2 w-[90vw] mx-auto text-center md:w-[90vw] md:mx-auto md:text-left lg:w-[85vw] lg:mt-[50px] xl:mt-[80px]">
        <h2 className="text-lg font-bold lg:text-2xl xl:text-3xl 2xl:text-5xl">Tech Storyteller 🪄</h2>
        <p className="text-sm mt-2 font-thin text-justify lg:text-lg xl:text-xl xl:mt-6 2xl:text-2xl ">
          I believe technology is a{" "}
          <span className="font-bold">storytelling tool</span>, connecting
          people beyond lines of code. Let's transform your story into a
          realistic solution. Always available for discussions, I'm not just a
          Software Engineer but a{" "}
          <span className="font-bold">
            storyteller shaping the tech future.
          </span>
        </p>
        <span className="mt-9 block lg:text-xl xl:text-2xl 2xl:text-3xl">In my words,</span>
        <h3 className="mt-5 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl xl:mt-[50px] 2xl:text-4xl italic tracking-wide">
          "I'm here for you! Let's connect and innovate together."
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
