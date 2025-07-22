import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/scss/main.scss';
import '../assets/scss/style.scss';
import '../assets/scss/style2.scss';
import '../assets/scss/d_flaticon.scss';
import 'antd/dist/reset.css';
// import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: '99 IT Solutions',
  description: 'Next.js 15 + Bootstrap setup',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <BootstrapClient />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
