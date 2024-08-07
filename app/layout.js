import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
      title: "Add Task | Home",
      description: "Add Task | Home",
};

export default function RootLayout({ children }) {
      return (
            <html lang="en" className="flex justify-center">
                  <body className={`${inter.className} w-[70%] `}>
                        <nav className="flex justify-center items-center py-4 text-lg border-b">
                              <ul className="flex items-center gap-10">
                                    <li className="duration-300 hover:underline">
                                          <Link href="/">Home</Link>
                                    </li>
                                    <li className="duration-300 hover:underline">
                                          <Link href="/task/pending">
                                                Pending task
                                          </Link>
                                    </li>
                                    <li className="duration-300 hover:underline">
                                          <Link href="/task/complete">
                                                Complete Task
                                          </Link>
                                    </li>
                              </ul>
                        </nav>
                        {children}
                  </body>
            </html>
      );
}
