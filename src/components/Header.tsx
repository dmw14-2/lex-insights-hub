import { SearchBox } from "./SearchBox";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-40 shadow-sm animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#/" className="font-serif text-2xl tracking-tight text-law-navy hover:text-law-navy-light transition-all duration-300 hover:scale-105">
          Kush Sharma
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#/" className="story-link text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#/articles" className="story-link text-foreground hover:text-primary transition-colors">Articles</a>
          <a href="#/topics" className="story-link text-foreground hover:text-primary transition-colors">Topics</a>
          <a href="#/about" className="story-link text-foreground hover:text-primary transition-colors">About</a>
          <a href="#/cv" className="story-link text-foreground hover:text-primary transition-colors">CV</a>
        </nav>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <SearchBox />
        </div>
      </div>
    </header>
  );
}