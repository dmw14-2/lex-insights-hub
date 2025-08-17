import { SEO } from "@/components/SEO";

export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="About – Kush Sharma" />
      
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-law-navy mb-6">About</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Hi, I'm <strong className="text-law-navy">Kush Sharma</strong>, a law student from India 
            focusing on Intellectual Property, Banking & Finance, and IBC/Resolution. This site 
            publishes research articles, statute explainers, and case notes—aimed at practitioners, 
            in-house counsels, and students.
          </p>
          <p className="text-lg leading-relaxed">
            Posting cadence: <em>weekly and monthly</em>. All opinions are personal; not legal advice.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="font-serif text-3xl text-law-navy mb-6">Academic Focus</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border shadow-card bg-card">
            <h3 className="font-serif text-xl text-law-navy mb-3">Intellectual Property</h3>
            <p className="text-academic-gray">
              Copyright, patents, trademarks, and emerging IP issues in technology and AI.
            </p>
          </div>
          <div className="p-6 rounded-lg border shadow-card bg-card">
            <h3 className="font-serif text-xl text-law-navy mb-3">Banking & Finance</h3>
            <p className="text-academic-gray">
              Regulatory compliance, debt markets, fintech regulations, and cross-border finance.
            </p>
          </div>
          <div className="p-6 rounded-lg border shadow-card bg-card">
            <h3 className="font-serif text-xl text-law-navy mb-3">IBC/Resolution</h3>
            <p className="text-academic-gray">
              Insolvency law, corporate restructuring, and resolution processes under IBC 2016.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl text-law-navy mb-6">Approach</h2>
        <div className="prose prose-lg max-w-none">
          <ul className="space-y-3">
            <li><strong>Practical Focus:</strong> Real-world applications and practitioner insights</li>
            <li><strong>Academic Rigor:</strong> Proper citations using Bluebook style</li>
            <li><strong>Accessible Writing:</strong> Complex concepts explained clearly</li>
            <li><strong>Current Relevance:</strong> Coverage of recent developments and cases</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-law-navy mb-6">Policies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-law-navy mb-2">Disclaimer</h3>
            <p className="text-sm text-academic-gray">
              All content is for informational purposes only. This is not legal advice.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-law-navy mb-2">Copyright Notice</h3>
            <p className="text-sm text-academic-gray">
              © {new Date().getFullYear()} Kush Sharma. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-law-navy mb-2">Privacy Policy</h3>
            <p className="text-sm text-academic-gray">
              No tracking beyond basic analytics and Disqus comments.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-law-navy mb-2">Terms of Use</h3>
            <p className="text-sm text-academic-gray">
              Fair use of excerpts permitted with proper attribution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}