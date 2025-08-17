export function classNames(...args: (string | boolean | undefined)[]): string {
  return args.filter(Boolean).join(" ");
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { 
    year: "numeric", 
    month: "short", 
    day: "numeric" 
  });
}