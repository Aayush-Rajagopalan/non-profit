import Image from "next/image";
import React from "react";

const Benefits = (props: any) => {
  const { data } = props;
  return (
    <>
      <div id="about" className="container flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-3/4 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data.image}
              width="521"
              height="400"
              alt="Benefits"
              className={"object-cover rounded-lg w-full"}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-zinc-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item: any, index: any) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Benefit(props: any) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-blue-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
            {props.title}
          </h4>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
