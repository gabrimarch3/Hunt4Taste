import { Roboto } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContex";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Hunt4Taste",
  description: "La tua cantina a portata di tap!",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className={roboto.className}>{children}</body>
      </html>
    </CartProvider>
  );
}
