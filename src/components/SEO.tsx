import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export function SEO({ 
  title = "Kush Sharma – Legal Research", 
  description = "IP, Banking & Finance, and IBC research articles, case notes, and statute explainers.",
  url = "https://example.com",
  image = "https://dummyimage.com/1200x630/0b1e3a/ffffff&text=Kush+Sharma+Legal"
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [title, description, url, image]);

  return null;
}