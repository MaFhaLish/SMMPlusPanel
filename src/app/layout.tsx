import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SMM PLUS PANEL",
  description: "Best SMM Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: dark,
    // }}
    >
      <html lang="en">
        <body className={lexend.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
