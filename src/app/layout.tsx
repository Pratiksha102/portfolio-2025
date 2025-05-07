import type { Metadata } from "next";
import { Sora } from "next/font/google"; // Import Sora font
import "./globals.css";

// Import the Sora font with subsets
const sora = Sora({
  variable: "--font-sora", // This is the variable for the font
  subsets: ["latin"], // Add any other subsets if required
});

export const metadata: Metadata = {
  title: "Portfolio",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased`} // Apply the font to the body
      >
        {children}
      </body>
    </html>
  );
}
