export default function Hero() {
  return (
    <section>
      <div className="h-screen flex justify-center items-center max-w-screen-xl mx-auto px-4 py-28 gap-12 text-blue-400 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-blue-300 font-medium">
            Sed ut perspiciatis unde omnis iste natus voluptatem
          </h1>
          <h2 className="text-4xl text-blue-400 font-extrabold mx-auto md:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              Straightforward Insight
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Join Us
            </a>
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-blue-300 hover:text-blue-500 font-medium duration-150 active:bg-blue-100 border rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
