import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Walmart",
  description: "Walmart Clone",
};

const RootLayout: React.FC<
  Readonly<{ children: React.ReactNode; modal: React.ReactNode }>
> = ({ children, modal }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex">
          {modal}
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
