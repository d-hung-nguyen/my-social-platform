
import { Inter } from "next/font/google"; 
import DynamicComponent from './DynamicComponent'; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}
) {
  return (
    <html lang="en">
      <DynamicComponent/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
