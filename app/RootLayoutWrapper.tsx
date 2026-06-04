import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const analyticsToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;

export const metadata: Metadata = {
  metadataBase: new URL("https://lexa-learn.com"),
  title: {
    default: "LEXA",
    template: "%s | LEXA"
  },
  description: "LEXA turns the impulse to open your phone into English review.",
  icons: {
    icon: "/assets/lexa-logo.png",
    apple: "/assets/lexa-logo.png"
  }
};

const themeBootScript = `
(() => {
  try {
    const saved = localStorage.getItem("lexa-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved === "light" || saved === "dark" ? saved : (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {analyticsToken ? (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: analyticsToken })}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
