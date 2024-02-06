import { Josefin_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Solar AI",
  description: "",
};
const josefin = Josefin_Sans({ subsets: ["latin"], weights: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} relative`}>{children}</body>
    </html>
  );
}
