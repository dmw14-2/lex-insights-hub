import { useState, useEffect } from "react";

export function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash || "#/");
  
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  
  return route;
}

export function parseRoute(hash: string) {
  const [path, query] = hash.replace(/^#/, "").split("?");
  return { path, query: new URLSearchParams(query) };
}