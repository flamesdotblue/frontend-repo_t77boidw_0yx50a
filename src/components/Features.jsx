import { Star, Shield, Lightning } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Polished UI",
    desc: "Thoughtful spacing, typography, and color choices give you a clean, modern look.",
  },
  {
    icon: Lightning,
    title: "Fast by default",
    desc: "Built on Vite + React with Tailwind, everything feels instant and responsive.",
  },
  {
    icon: Shield,
    title: "Accessible",
    desc: "Components are keyboard-friendly and follow accessible contrast guidelines.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What you get</h2>
          <p className="mt-3 text-slate-600">
            A small set of essentials to help you ship something beautiful without the fuss.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-lg bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
