"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="container  p-8 mx-auto md:my-36 xl:px-0 flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-zinc-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Welcome to Straightforward Insight
            </h1>
            <p className="py-5 text-xl leading-normal text-zinc-500 lg:text-xl xl:text-2xl dark:text-zinc-300">
              A dynamic student-led organization which is committed to providing
              invaluable insights to a diverse range of questions. We serve as a
              bridge, connecting eager students with pre-existing organizations
              to offer them unique opportunities for growth and learning.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md "
              >
                Contact
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white border-2 border-blue-600 rounded-md"
              >
                <span> Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={
                "https://cdn.aayus.me/uploads/Screen_Shot_2023-11-13_at_10__1_-removebg.png"
              }
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
