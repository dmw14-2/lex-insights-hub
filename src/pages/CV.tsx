import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

export function CV() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <SEO title="CV – Kush Sharma" />
      
      <header className="mb-12 animate-slide-up">
        <h1 className="font-serif text-4xl md:text-5xl text-law-navy mb-6">CV / Resume</h1>
        <p className="text-lg text-academic-gray mb-6">
          Download a PDF copy of my latest CV. This page can auto-update from 
          Google Drive/Docs in the CMS phase.
        </p>
        <div className="flex gap-4">
          <Button variant="legal" size="lg">
            Download CV (PDF)
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#/contact">Contact</a>
          </Button>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="font-serif text-3xl text-law-navy mb-6">Professional Highlights</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border shadow-card bg-card">
            <h3 className="font-serif text-xl text-law-navy mb-3">Academic Excellence</h3>
            <ul className="space-y-2 text-academic-gray">
              <li>• Law student with focus on contemporary legal issues</li>
              <li>• Published research in IP, Banking & Finance, and IBC</li>
              <li>• Regular contributor to legal journals and publications</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg border shadow-card bg-card">
            <h3 className="font-serif text-xl text-law-navy mb-3">Research Areas</h3>
            <ul className="space-y-2 text-academic-gray">
              <li>• <strong>IP Law:</strong> Copyright, patents, AI and technology law</li>
              <li>• <strong>Banking & Finance:</strong> Regulatory compliance, debt markets</li>
              <li>• <strong>IBC/Resolution:</strong> Corporate insolvency and restructuring</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg border shadow-card bg-card">
            <h3 className="font-serif text-xl text-law-navy mb-3">Writing & Research</h3>
            <ul className="space-y-2 text-academic-gray">
              <li>• Academic footnotes and Bluebook citation style</li>
              <li>• Practical explainers for complex legal concepts</li>
              <li>• Case analysis and statute interpretation</li>
              <li>• Target audience: law firms, in-house counsel, students</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-law-navy mb-6">Contact Information</h2>
        <div className="p-6 rounded-lg border shadow-card bg-card">
          <p className="text-academic-gray mb-4">
            For professional inquiries, collaboration opportunities, or academic discussions.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong className="text-law-navy">Location:</strong> India</p>
            <p><strong className="text-law-navy">Areas:</strong> IP Law, Banking & Finance, IBC</p>
            <p><strong className="text-law-navy">Languages:</strong> English, Hindi</p>
          </div>
        </div>
      </section>
    </div>
  );
}