import "./globals.css";

export const metadata = {
  title: "My-Mon-App v2",
  description: "Monitoring",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
