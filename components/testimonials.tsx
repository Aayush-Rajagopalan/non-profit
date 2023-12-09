import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="container my-16">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-zinc-800 px-14 rounded-2xl py-14 dark:bg-truezinc-800">
            <p className="text-2xl leading-normal ">
              This is a <Mark>testimonial</Mark>
              from someone.
            </p>

            <Avatar
              image={"https://cdn.aayus.me/logo.png"}
              name="John Doe"
              title="Student at DPS"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-zinc-800 px-14 rounded-2xl py-14 dark:bg-truezinc-800">
            <p className="text-2xl leading-normal ">
              This is also a <Mark>testimonial</Mark>
              from someone.
            </p>

            <Avatar
              image={"https://cdn.aayus.me/logo.png"}
              name="John Doe"
              title="Student at DPS"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-zinc-800 px-14 rounded-2xl py-14 dark:bg-truezinc-800">
            <p className="text-2xl leading-normal ">
              This is also also a <Mark>testimonial</Mark>
              from someone..
            </p>

            <Avatar
              image={"https://cdn.aayus.me/logo.png"}
              name="John Doe"
              title="Student at DPS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Avatar(props: any) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 aspect-square overflow-hidden rounded-full w-14 h-14">
        <Image src={props.image} width="40" height="40" alt="Avatar" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-zinc-600 dark:text-zinc-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: any) {
  return (
    <>
      {" "}
      <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
