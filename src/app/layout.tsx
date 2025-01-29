import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Write from "./write";

export const metadata: Metadata = {
  title: "rii_blog",
  description: "@rii_3112のブログ-これはvercelを勉強する為に作ったものです-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        <Write/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
