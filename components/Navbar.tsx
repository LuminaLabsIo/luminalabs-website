export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <span className="text-xl font-semibold text-slate-900">
              Lumina Labs
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-slate-600 hover:text-slate-900 transition">
              Home
            </a>
            <a href="/apps" className="text-slate-600 hover:text-slate-900 transition">
              Apps
            </a>
            <a href="/privacy" className="text-slate-600 hover:text-slate-900 transition">
              Privacy
            </a>
            <a 
              href="mailto:hello@luminalabs.com" 
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}