import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Registro de Materiales",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="h-screen">
          {/* componente Navbar */}
          <NavBar/>

          {/* page.js página principal */}
          <div className="mt-8 mx-auto p-4">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
