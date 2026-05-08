import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <main className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1">
              {children}
            </div>

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}