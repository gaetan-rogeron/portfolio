import "./globals.css";
import { arboria, europa, objektiv } from "./fonts";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${arboria.variable} ${europa.variable} ${objektiv.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
