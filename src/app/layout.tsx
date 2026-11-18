import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Портфоліо UI-дизайнера",
  description: "Інтерфейси для невеликих SaaS-продуктів",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
