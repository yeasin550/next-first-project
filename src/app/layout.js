import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Project",
  description: "Generated by create next app",
};

const  RootLayout = ({ children }) =>  {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center gap-3 ">
        </nav>
        {children}
      </body>
    </html>
  );
}
export default  RootLayout


//* default funciton 
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
