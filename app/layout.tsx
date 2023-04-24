import './globals.css';
import Header from './Header';
export const metadata = {
  title: 'Ikar Demo',
  description: 'Created by Ikar',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
