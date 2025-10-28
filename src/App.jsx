import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="get-started" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-1">
              <div className="rounded-2xl bg-white/90 p-8 sm:p-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Get started in seconds</h3>
                    <p className="mt-2 text-slate-600">
                      You now have a clean foundation to customize. Edit the text, tweak the colors,
                      and make it your own.
                    </p>
                  </div>
                  <form className="grid gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      aria-label="Email"
                    />
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-3 font-medium hover:bg-indigo-500 transition-colors"
                    >
                      Join the Newsletter
                    </button>
                    <p className="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
