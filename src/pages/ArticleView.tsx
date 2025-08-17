import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DiscussionEmbed } from "disqus-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SAMPLE_ARTICLES, TOPICS } from "@/data/content";
import { formatDate } from "@/utils/helpers";

interface ArticleViewProps {
  slug: string;
}

export function ArticleView({ slug }: ArticleViewProps) {
  const article = SAMPLE_ARTICLES.find(a => a.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!article) {
    return (
      <div className="text-center py-12">
        <h1 className="font-serif text-3xl text-law-navy mb-4">Article not found</h1>
        <Button asChild variant="outline">
          <a href="#/articles">Back to Articles</a>
        </Button>
      </div>
    );
  }

  const topic = TOPICS.find(t => t.key === article.topic);

  const downloadPDF = async () => {
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = contentRef.current;
      const opt = {
        margin: 10,
        filename: `${article.slug}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const disqusShortname = "your-disqus-shortname";
  const disqusConfig = {
    url: `https://example.com/#/article/${slug}`,
    identifier: slug,
    title: article.title,
  };

  return (
    <article className="max-w-4xl mx-auto animate-fade-in">
      <SEO 
        title={`${article.title} – Kush Sharma`}
        description={article.excerpt}
        url={`https://example.com/#/article/${slug}`}
      />
      
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 text-sm text-academic-gray mb-4">
          <a 
            href={`#/topics/${article.topic}`} 
            className="uppercase tracking-wide font-medium text-law-gold hover:text-law-navy transition-colors"
          >
            {topic?.label}
          </a>
          <span>•</span>
          <span>{formatDate(article.date)}</span>
          <span>•</span>
          <span>{article.readingTime} min read</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl text-law-navy leading-tight mb-4">
          {article.title}
        </h1>
        
        <p className="text-lg text-academic-gray leading-relaxed mb-6">
          {article.excerpt}
        </p>
        
        <div className="flex gap-2 flex-wrap mb-6">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 no-print">
          <Button onClick={downloadPDF} variant="outline" size="sm">
            Download PDF
          </Button>
          <Button onClick={() => window.print()} variant="outline" size="sm">
            Print
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href="#/articles">Back to Articles</a>
          </Button>
        </div>
      </header>

      {/* Article Content */}
      <div ref={contentRef} className="prose prose-lg max-w-none mb-12">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>

      {/* Comments Section */}
      <section className="mb-12 no-print">
        <h2 className="font-serif text-2xl text-law-navy mb-6">Comments</h2>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </section>

      {/* Author Bio */}
      <section className="border-t pt-8 no-print">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
            <span className="text-2xl font-serif text-law-navy">KS</span>
          </div>
          <div>
            <h3 className="font-serif text-xl text-law-navy mb-1">Kush Sharma</h3>
            <p className="text-academic-gray mb-3">
              Law student, India – IP, Banking & Finance, IBC
            </p>
            <p className="text-sm text-academic-gray leading-relaxed">
              I write practical explainers and case notes with Bluebook citations, 
              focusing on areas that matter to practitioners and students.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}