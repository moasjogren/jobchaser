"use client";

import "./globals.css";
import { ThemeProvider } from "./_context/ThemeContext";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import DarkModeWrapper from "./_components/DarkModeWrapper";

// Redux-importer
import { Provider } from "react-redux";
import store from "@/lib/store";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <html lang="en">
          <body>
            <DarkModeWrapper>
              <Header />
              {children}
              <Footer />
            </DarkModeWrapper>
          </body>
        </html>
      </ThemeProvider>
    </Provider>
  );
}
