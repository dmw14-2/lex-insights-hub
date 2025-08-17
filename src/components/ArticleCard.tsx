import { Article, TOPICS } from "@/data/content";
import { formatDate, classNames } from "@/utils/helpers";
import { Badge } from "./ui/badge";

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  const topic = TOPICS.find(t => t.key === article.topic);

  return (
    <a 
      href={`#/article/${article.slug}`} 
      className="block p-6 rounded-lg border hover:shadow-card bg-card transition-all duration-200 hover:border-accent group"
    >
      <div className="flex items-center gap-3 text-xs text-academic-gray mb-3">
        <span className="uppercase tracking-wide font-medium text-law-navy">
          {topic?.label}
        </span>
        <span>•</span>
        <span>{formatDate(article.date)}</span>
        <span>•</span>
        <span>{article.readingTime} min</span>
      </div>
      
      <h3 className={classNames(
        "font-serif text-law-navy group-hover:text-law-navy-light transition-colors",
        compact ? "text-lg" : "text-2xl"
      )}>
        {article.title}
      </h3>
      
      <p className="text-academic-gray mt-2 text-sm leading-relaxed">
        {article.excerpt}
      </p>
      
      <div className="mt-4 flex gap-2 flex-wrap">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            #{tag}
          </Badge>
        ))}
      </div>
    </a>
  );
}