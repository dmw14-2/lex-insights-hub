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
        <div className="space-y-6 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-law-navy animate-slide-up">
            Legal research and practical explainers for India
          </h1>
          <p className="text-lg text-academic-gray leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Articles, case notes, and statute explainers across{" "}
            <strong className="text-law-navy">IP Law</strong>,{" "}
            <strong className="text-law-navy">Banking & Finance</strong>, and{" "}
            <strong className="text-law-navy">IBC/Resolution</strong>. 
            Updated weekly and monthly.
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild variant="legal" size="lg">
              <a href="#/articles">Read Articles</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#/cv">Download CV</a>
            </Button>
          </div>
        </div>
        
        <div className="p-8 border rounded-lg shadow-card bg-card animate-fade-in hover-lift" style={{ animationDelay: '0.3s' }}>
          <h2 className="font-serif text-2xl mb-6 text-law-navy">Featured Articles</h2>
          <div className="space-y-6">
            {featuredArticles.map((article, index) => (
              <div key={article.slug} className="animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <ArticleCard article={article} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TopicsGrid />

      {/* Recent Cases Tracker */}
      <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div>
          <h2 className="font-serif text-3xl text-law-navy mb-2">Recent Cases Tracker</h2>
          <p className="text-academic-gray">
            Short notes on notable decisions; longer case notes appear in Articles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SAMPLE_CASES.filter(caseNote => caseNote.topic === 'ip').map((caseNote, i) => (
            <div 
              key={i} 
              className="p-6 rounded-lg border bg-card shadow-card hover-lift animate-fade-in transition-all duration-300"
              style={{ animationDelay: `${0.7 + i * 0.1}s` }}
            >
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

      <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
        <NewsletterCTA />
      </div>
    </div>
  );
}