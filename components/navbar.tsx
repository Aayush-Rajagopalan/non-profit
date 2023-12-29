"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import { FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
const Navbar = () => {
  const router = useRouter();
  const nav = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Team",
      href: "#people",
    },
    {
      name: "Blog",
      href: "https://blog.straightforwardinsight.org",
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-8">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-zinc-100">
                    <span>
                      <Image
                        src="https://cdn.aayus.me/uploads/logo.png"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>SFI</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-zinc-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-zinc-300 dark:focus:bg-truezinc-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {nav.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="w-full px-4 py-2 -ml-4 text-zinc-500 rounded-md dark:text-zinc-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-zinc-800 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="https://aayus.me/sfi_insta"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 rounded-md lg:ml-5"
                    >
                      Contact
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <div className="hidden text-lefdt lg:flex lg:ditems-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              <Link
                href={"https://aayus.me/sfi_spotify"}
                className="mr-4  "
              >
                <FaSpotify className="h-5 w-5"/>
              </Link>
              <Link
                href={"https://aayus.me/sfi_insta"}
                className="mr-4  "
              >
                <FaInstagram className="h-6 w-6"/>
              </Link>
              <Link
                href={"https://aayus.me/sfi_yt"}
                className="mr-4  "
              >
                <FaYoutube className="h-6 w-6"/>
              </Link>
              {nav.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={menu.href}
                    className="inline-block px-2 py-2 text-lg font-normal text-blue-800 no-underline rounded-md dark:text-zinc-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-zinc-800"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={() => {
              sendGTMEvent({ event: "contact", value: "navbar"})
              router.push("https://aayus.me/sfi_insta");
            }}
            className="px-6 py-2 text-white hover:bg-blue-700 bg-blue-600 rounded-md md:ml-5"
          >
            Contact
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
