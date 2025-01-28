import './globals.css';
import { Barlow } from "next/font/google"

export const metadata = {
  title: 'Coming Soon',
  description: 'Join the waitlist for something great!',
};

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
