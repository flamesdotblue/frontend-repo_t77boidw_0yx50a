export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-indigo-200/70 via-violet-200/60 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-28">
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full ring-1 ring-indigo-300/60 text-indigo-700 bg-indigo-50 mb-6">
            Simple. Beautiful. Fast.
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build a delightful web presence in minutes
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            A minimal starter that looks great out of the box. Clean design, modern components,
            and smooth interactions powered by Tailwind.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#get-started" className="inline-flex items-center px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow-sm hover:shadow-md hover:bg-indigo-500 transition-all">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
