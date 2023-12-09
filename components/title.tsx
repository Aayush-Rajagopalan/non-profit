import React from "react";
const SectionTitle = (props:any) => {
  return (
    <div
      className={`flex container w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-blue-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-zinc-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-zinc-500 lg:text-xl xl:text-xl dark:text-zinc-300">
          {props.children}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;