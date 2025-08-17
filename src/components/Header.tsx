import { SearchBox } from "./SearchBox";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#/" className="font-serif text-2xl tracking-tight text-law-navy hover:text-law-navy-light transition-colors">
          Kush Sharma
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#/" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#/articles" className="text-foreground hover:text-primary transition-colors">Articles</a>
          <a href="#/topics" className="text-foreground hover:text-primary transition-colors">Topics</a>
          <a href="#/about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#/cv" className="text-foreground hover:text-primary transition-colors">CV</a>
        </nav>
        <SearchBox />
      </div>
    </header>
  );
}