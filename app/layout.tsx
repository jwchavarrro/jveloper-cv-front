/**
 * @file layout.tsx
 * @description Layout principal de la aplicación
 */
import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

// Import of context
import { ThemeProvider } from "@/context";

// Configuracion de fuentes
// Titulos: Poppins
const poppins = Poppins({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

// Texto: Open Sans
const openSans = Open_Sans({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Juan Developer - CV Portfolio",
  description: "Portfolio profesional desarrollado con Next.js, TypeScript y Tailwind CSS v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
