export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Nebula Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white">hello@nebulastudio.dev</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
