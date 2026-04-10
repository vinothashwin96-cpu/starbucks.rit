import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground tracking-tight">Starbucks</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Menu", "Rewards", "Gift Cards", "Find a Store"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-body font-semibold text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            Sign in
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-accent transition-colors"
          >
            Join now
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {["Menu", "Rewards", "Gift Cards", "Find a Store"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="block text-sm font-semibold text-foreground/80 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="text-sm font-semibold text-foreground/80">Sign in</a>
            <a href="#" className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              Join now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
