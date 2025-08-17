import { TOPICS } from "@/data/content";

export function TopicsGrid() {
  return (
    <section className="space-y-6 animate-fade-in">
      <h2 className="font-serif text-3xl text-law-navy">Topics</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {TOPICS.map((topic, index) => (
          <a
            key={topic.key}
            href={`#/topics/${topic.key}`}
            className="p-6 rounded-lg border hover:shadow-card bg-card transition-all duration-300 hover:border-accent hover:-translate-y-1 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="font-serif text-xl text-law-navy group-hover:text-law-navy-light transition-colors duration-300">
              {topic.label}
            </h3>
            <p className="text-sm text-academic-gray mt-2 group-hover:text-foreground transition-colors duration-300">
              Articles, notes, and explainers
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}