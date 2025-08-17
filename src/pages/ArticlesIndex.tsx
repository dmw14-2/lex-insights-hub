import { useMemo } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { SAMPLE_ARTICLES, TOPICS } from "@/data/content";

interface ArticlesIndexProps {
  topicKey?: string;
  query?: string;
}

export function ArticlesIndex({ topicKey, query }: ArticlesIndexProps) {
  const articles = useMemo(() => {
    let arr = SAMPLE_ARTICLES.slice().sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    if (topicKey) {
      arr = arr.filter(a => a.topic === topicKey);
    }
    
    if (query) {
      const q = query.toLowerCase();
      arr = arr.filter(a => 
        [a.title, a.excerpt, ...a.tags].join(" ").toLowerCase().includes(q)
      );
    }
    
    return arr;
  }, [topicKey, query]);

  const topic = topicKey ? TOPICS.find(t => t.key === topicKey) : null;

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-serif text-4xl text-law-navy mb-4">
          {topic ? topic.label : "All Articles"}
        </h1>
        {query && (
          <p className="text-academic-gray">
            Search results for "{query}" ({articles.length} articles found)
          </p>
        )}
      </div>
      
      {articles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-academic-gray text-lg">No articles found.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div key={article.slug} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}