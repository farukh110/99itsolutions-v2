import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../assets/scss/main.scss';
import '../assets/scss/style.scss';
import '../assets/scss/style2.scss';
import '../assets/scss/d_flaticon.scss';
import 'antd/dist/reset.css';
import BootstrapClient from "../components/BootstrapClient";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 99 IT Solutions",
    default: "99 IT Solutions",
  },
  description: "99 IT Solutions is a leading technology innovator with over 10 years of industry expertise, delivering cutting-edge digital solutions and software outsourcing services to SMEs worldwide.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={montserrat.variable}>
        <BootstrapClient />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
