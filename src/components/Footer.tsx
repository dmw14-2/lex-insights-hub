import { NewsletterCTA } from "./NewsletterCTA";

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-academic-light/30">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-serif text-xl text-law-navy">Kush Sharma</div>
          <div className="text-academic-gray mt-2">India-focused, with global perspective.</div>
        </div>
        <div>
          <div className="font-medium mb-2 text-law-navy">Navigation</div>
          <ul className="space-y-1">
            <li><a href="#/" className="text-academic-gray hover:text-primary transition-colors">Home</a></li>
            <li><a href="#/articles" className="text-academic-gray hover:text-primary transition-colors">Articles</a></li>
            <li><a href="#/topics" className="text-academic-gray hover:text-primary transition-colors">Topics</a></li>
            <li><a href="#/about" className="text-academic-gray hover:text-primary transition-colors">About</a></li>
            <li><a href="#/cv" className="text-academic-gray hover:text-primary transition-colors">CV</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2 text-law-navy">Policies</div>
          <ul className="space-y-1">
            <li><a href="#/policy/disclaimer" className="text-academic-gray hover:text-primary transition-colors">Disclaimer</a></li>
            <li><a href="#/policy/copyright" className="text-academic-gray hover:text-primary transition-colors">Copyright</a></li>
            <li><a href="#/policy/privacy" className="text-academic-gray hover:text-primary transition-colors">Privacy</a></li>
            <li><a href="#/policy/terms" className="text-academic-gray hover:text-primary transition-colors">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2 text-law-navy">Newsletter</div>
          <p className="text-academic-gray mb-2">Mailchimp-powered. No spam.</p>
          <NewsletterCTA />
        </div>
      </div>
      <div className="text-xs text-academic-gray text-center pb-6">
        © {new Date().getFullYear()} Kush Sharma. All rights reserved.
      </div>
    </footer>
  );
}