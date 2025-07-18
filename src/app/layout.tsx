import "./globals.css";
import { arboria, europa, objektiv } from "./fonts";

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
      <body>{children}</body>
    </html>
  );
}
