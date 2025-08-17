import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import { useHashRoute, parseRoute } from "@/hooks/useHashRoute";
import { Home } from "@/pages/Home";
import { ArticlesIndex } from "@/pages/ArticlesIndex";
import { ArticleView } from "@/pages/ArticleView";
import { About } from "@/pages/About";
import { CV } from "@/pages/CV";
import { Policy } from "@/pages/Policy";
import { TopicsGrid } from "@/components/TopicsGrid";

const queryClient = new QueryClient();

function AppRouter() {
  const route = useHashRoute();
  const { path, query } = parseRoute(route);

  let screen = null;
  
  if (path === "/" || path === "") {
    screen = <Home />;
  } else if (path === "/articles") {
    screen = <ArticlesIndex />;
  } else if (path.startsWith("/topics/")) {
    const key = path.split("/")[2];
    screen = <ArticlesIndex topicKey={key} />;
  } else if (path.startsWith("/article/")) {
    const slug = path.split("/")[2];
    screen = <ArticleView slug={slug} />;
  } else if (path === "/about") {
    screen = <About />;
  } else if (path === "/cv") {
    screen = <CV />;
  } else if (path.startsWith("/policy/")) {
    const kind = path.split("/")[2];
    screen = <Policy kind={kind} />;
  } else if (path === "/topics") {
    screen = <TopicsGrid />;
  } else if (path.startsWith("/search")) {
    const q = query.get("q") || "";
    screen = (
      <div className="space-y-8">
        <h1 className="font-serif text-4xl text-law-navy">Search Results</h1>
        <ArticlesIndex query={q} />
      </div>
    );
  } else {
    screen = <Home />;
  }

  return <Layout>{screen}</Layout>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRouter />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
