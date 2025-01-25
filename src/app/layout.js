import './globals.css';

export const metadata = {
  title: 'Coming Soon',
  description: 'Join the waitlist for something great!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
