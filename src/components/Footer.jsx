export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/70 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} VibeSite. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
