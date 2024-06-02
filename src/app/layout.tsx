import type { Metadata } from "next";
import VirtualWindow from "@/components/VirtualWindow";
import { relevantExperience } from "./experience";
import { education } from "./education";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Andrew Sweet's Portfolio",
  description: "Portfolio of Andrew Sweet, a senior software engineer based in Philadelphia, PA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="font-mono scanlines animate-chroma">
        <main className="h-screen flex flex-col items-center p-4 sm:p-10 mono bg-green text-green checkerboard-lg">
          <VirtualWindow title='System' className='border-black border-2 w-full max-w-6xl h-screen bg-black' items={[
            { title: 'Experience', shortTitle: 'EXP', options: relevantExperience },
            { title: 'Education', shortTitle: 'EDU', options: education },
            { title: 'Projects', shortTitle: 'PROJ', options: [/*'test', 'test2'*/] },
            { title: 'Languages', shortTitle: 'LANG', options: [] },
            { title: 'About', shortTitle: 'ABT', options: [] }
            ]}>
            <div className='flex m-4'>
              {children}
            </div>
          </VirtualWindow>
        </main>
        <div className="motion-reduce:hidden animate-flicker opacity-25 z-10 absolute inset-0 pointer-events-none" />
      </body>
    </html>
  );
}
