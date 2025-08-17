import { SEO } from "@/components/SEO";

interface PolicyProps {
  kind: string;
}

const POLICY_CONTENT = {
  disclaimer: {
    title: "Disclaimer",
    content: `This website and its content are provided for informational purposes only. The information contained herein does not constitute legal advice and should not be relied upon as such. 

The author, Kush Sharma, is a law student and the views expressed on this website are personal opinions based on research and study. They do not represent the views of any institution or organization.

Readers should consult with qualified legal professionals for advice specific to their circumstances. The author disclaims any liability for actions taken based on information provided on this website.

All case law, statutes, and regulations referenced are subject to change and interpretation. Readers should verify current legal provisions independently.`
  },
  copyright: {
    title: "Copyright Notice",
    content: `© ${new Date().getFullYear()} Kush Sharma. All rights reserved.

The content on this website, including but not limited to articles, case notes, analysis, and commentary, is protected by copyright law. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the author.

Fair use of excerpts is permitted for educational, research, or commentary purposes, provided that proper attribution is given to the author and this website.

For permission requests or licensing inquiries, please contact the author through the provided contact information.

Third-party content referenced or cited is the property of their respective owners and is used under fair dealing/fair use principles for academic and educational purposes.`
  },
  privacy: {
    title: "Privacy Policy",
    content: `This website respects your privacy and is committed to protecting your personal information.

**Information Collection**
- Basic website analytics (page views, referral sources)
- Email addresses for newsletter subscriptions (via Mailchimp)
- Comments through Disqus (subject to Disqus privacy policy)

**Use of Information**
- Analytics to improve website content and user experience
- Newsletter communications (you can unsubscribe at any time)
- Comment functionality for article discussions

**Third-Party Services**
- Mailchimp for newsletter management
- Disqus for comment system
- Basic analytics tools

**Data Retention**
Email addresses are retained until unsubscription. Analytics data is aggregated and anonymous.

**Contact**
For privacy-related questions or to request data deletion, please contact the author.

This privacy policy may be updated periodically. Check this page for the latest version.`
  },
  terms: {
    title: "Terms of Use",
    content: `By accessing and using this website, you agree to the following terms and conditions:

**Acceptable Use**
- Content is for personal, educational, and non-commercial use
- Do not reproduce substantial portions without permission
- Respect intellectual property rights of all referenced materials

**Content Disclaimer**
- Information is provided "as is" without warranties
- Content may contain errors or become outdated
- Author reserves the right to modify or remove content

**User Responsibilities**
- Comply with applicable laws and regulations
- Respect other users in comments and discussions
- Do not engage in harmful or disruptive behavior

**Limitations of Liability**
The author shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of this website or reliance on its content.

**Governing Law**
These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.

**Changes to Terms**
These terms may be updated periodically. Continued use of the website constitutes acceptance of any changes.

For questions about these terms, please contact the author.`
  }
};

export function Policy({ kind }: PolicyProps) {
  const policy = POLICY_CONTENT[kind as keyof typeof POLICY_CONTENT];

  if (!policy) {
    return (
      <div className="text-center py-12">
        <h1 className="font-serif text-3xl text-law-navy mb-4">Policy not found</h1>
        <p className="text-academic-gray">The requested policy page could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <SEO title={`${policy.title} – Kush Sharma`} />
      
      <header className="mb-8">
        <h1 className="font-serif text-4xl md:text-5xl text-law-navy mb-4">
          {policy.title}
        </h1>
        <p className="text-academic-gray">
          India jurisdiction emphasis; global readers welcome.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        {policy.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
            return (
              <h3 key={index} className="font-serif text-xl text-law-navy mt-8 mb-4">
                {paragraph.slice(2, -2)}
              </h3>
            );
          }
          return (
            <p key={index} className="leading-relaxed mb-4">
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}