"use client";
const Hero = () => {
  return (
    <>
      <div className="container h-screen flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-zinc-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Welcome to Straightforward Insight
            </h1>
            <p className="py-5 text-xl leading-normal text-zinc-500 lg:text-xl xl:text-2xl dark:text-zinc-300">
              Straightforward Insight is a dynamic student-led organization
              committed to providing valuable insight to a diverse range of
              questions.
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
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            {/* <Image
              src={'https://cdn.aayus.me/wallpaper.png'}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
