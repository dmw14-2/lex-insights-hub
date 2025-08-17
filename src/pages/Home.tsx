import { SEO } from "@/components/SEO";
import { ArticleCard } from "@/components/ArticleCard";
import { TopicsGrid } from "@/components/TopicsGrid";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { Button } from "@/components/ui/button";
import { SAMPLE_ARTICLES, SAMPLE_CASES, TOPICS } from "@/data/content";

export function Home() {
  const featuredArticles = SAMPLE_ARTICLES.filter(a => a.featured);

  return (
    <div className="space-y-16">
      <SEO />

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-8">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-law-navy">
            Legal research and practical explainers for India
          </h1>
          <p className="text-lg text-academic-gray leading-relaxed">
            Articles, case notes, and statute explainers across{" "}
            <strong className="text-law-navy">IP Law</strong>,{" "}
            <strong className="text-law-navy">Banking & Finance</strong>, and{" "}
            <strong className="text-law-navy">IBC/Resolution</strong>. 
            Updated weekly and monthly.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="legal" size="lg">
              <a href="#/articles">Read Articles</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#/cv">Download CV</a>
            </Button>
          </div>
        </div>
        
        <div className="p-8 border rounded-lg shadow-card bg-card">
          <h2 className="font-serif text-2xl mb-6 text-law-navy">Featured Articles</h2>
          <div className="space-y-6">
            {featuredArticles.map(article => (
              <ArticleCard key={article.slug} article={article} compact />
            ))}
          </div>
        </div>
      </section>

      <TopicsGrid />

      {/* Recent Cases Tracker */}
      <section className="space-y-6">
        <div>
          <h2 className="font-serif text-3xl text-law-navy mb-2">Recent Cases Tracker</h2>
          <p className="text-academic-gray">
            Short notes on notable decisions; longer case notes appear in Articles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SAMPLE_CASES.map((caseNote, i) => (
            <div key={i} className="p-6 rounded-lg border bg-card shadow-card">
              <div className="text-xs uppercase tracking-wide text-law-gold font-medium mb-2">
                {TOPICS.find(t => t.key === caseNote.topic)?.label}
              </div>
              <h3 className="font-serif text-lg text-law-navy mb-1">
                {caseNote.title}
              </h3>
              <p className="text-academic-gray text-sm">
                {caseNote.citation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}