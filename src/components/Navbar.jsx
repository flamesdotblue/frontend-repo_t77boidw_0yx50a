import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
            <Rocket className="w-5 h-5" />
          </span>
          <span className="text-lg tracking-tight">VibeSite</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          <a href="#get-started" className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
