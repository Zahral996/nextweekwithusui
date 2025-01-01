import Header from "@/components/LandingPage/header";
import "./globals.css";
import Footer from "@/components/shared/footer";


export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
