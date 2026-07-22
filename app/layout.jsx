import "./globals.css";
import { profile } from "@/data/portfolio";
import Providers from "@/components/Providers";

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
