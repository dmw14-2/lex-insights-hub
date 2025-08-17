import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterCTA() {
  return (
    <div className="p-6 rounded-lg border shadow-card bg-gradient-accent hover-lift transition-all duration-300">
      <h3 className="font-serif text-xl mb-1 text-law-navy">Subscribe for weekly/monthly insights</h3>
      <p className="text-sm text-academic-gray mb-4">IP, Banking & Finance, and IBC—new posts and case trackers.</p>
      <form 
        action="https://mailchimp.com/your-form-action" 
        method="post" 
        target="_blank" 
        className="flex flex-col sm:flex-row gap-2"
      >
        <Input
          name="EMAIL"
          type="email"
          required
          placeholder="Your email"
          className="flex-1"
        />
        <Button type="submit" variant="legal" size="sm">
          Subscribe
        </Button>
      </form>
    </div>
  );
}