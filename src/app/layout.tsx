import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import ThemeChanger from "@/components/theme/themeSelector";
import useMuiTheme from "@/components/theme/useMuiTheme";
import CustomThemeProvider from "@/components/theme/customThemeProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next-ThreeJS App",
  description: "Generated by create nextjs 14 and threejs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={urbanist.className}>
        <ThemeProvider>
          <CustomThemeProvider>
            <ThemeChanger />
            {children}
          </CustomThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
