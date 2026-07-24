import "./globals.css";
import { profile } from "@/data/portfolio";
import Providers from "@/components/Providers";

const SITE_URL = "https://krishnaandhe.github.io";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  icons: { icon: "/site_logo.png" },
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.tagline,
    url: SITE_URL,
    siteName: profile.name,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portfolio`,
    description: profile.tagline,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
