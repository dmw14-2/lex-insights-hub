import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}