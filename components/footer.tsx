import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-zinc-950 md:p-8 lg:p-6">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="text-sm my-6 text-zinc-500 dark:text-zinc-400">
          Made with ♥ by{" "}
          <Link href={"https://aayus.me/"}>Aayush Rajagopalan</Link>
        </p>

        <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Straightforward Insight
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
