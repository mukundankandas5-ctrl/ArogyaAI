import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ArogyaAI — AI-Powered Health & Nutrition Planner',
  description: 'Generate personalized diet and lifestyle plans using AI based on your health profile and regional food habits. Specialized for Tamil Nadu and South Indian cuisine.',
  keywords: 'health planner, nutrition AI, Tamil Nadu diet, personalized meal plan, diabetes diet, South Indian food',
  openGraph: {
    title: 'ArogyaAI — AI-Powered Health Planning',
    description: 'Personalized diet plans powered by AI for Tamil Nadu and beyond',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
