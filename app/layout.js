import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'V Films - Where Stories Find Their Voice and Form',
  description: 'Since 2009, V\'ve been telling stories - stories of people, their journeys, and the places that shape them. Films . Brands . Art',
  keywords: 'films, video production, brand stories, storytelling, Varnan films',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
