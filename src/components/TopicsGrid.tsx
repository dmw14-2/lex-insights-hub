import { TOPICS } from "@/data/content";

export function TopicsGrid() {
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-3xl text-law-navy">Topics</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {TOPICS.map((topic) => (
          <a
            key={topic.key}
            href={`#/topics/${topic.key}`}
            className="p-6 rounded-lg border hover:shadow-card bg-card transition-all duration-200 hover:border-accent group"
          >
            <h3 className="font-serif text-xl text-law-navy group-hover:text-law-navy-light transition-colors">
              {topic.label}
            </h3>
            <p className="text-sm text-academic-gray mt-2">
              Articles, notes, and explainers
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}