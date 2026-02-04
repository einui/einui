export const metadata = {
  title: "Components",
  description: "Browse Ein UI liquid glass components for React & Next.js.",
};

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return <div className="container max-w-4xl mx-auto px-4">{children}</div>;
}
