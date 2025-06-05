import type { Metadata } from "next";
import "./globals.css";
import Nabar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "I Care ",
  description: "I Care เพื่อนกันเพราะเราแคร์คุณเสมอหาเพื่อนเที่ยว ทำธุระ ขับรถ ทานข้าว ปรึกษาพูดคุย และอื่นๆ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
       <Nabar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
