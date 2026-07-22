import "./globals.css";
import { profile } from "@/data/portfolio";
import Providers from "@/components/Providers";

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  icons: { icon: "/site_logo.png" },
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning on body too: some browser extensions inject
          attributes onto <body> before React hydrates (harmless). */}
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
