
"use client"
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
 <div className="flex flex-col">
<Link href="/Login">login</Link>
<Link href="/About">about</Link>
<Link href="/Login/school">school</Link>
<Link href="/">home</Link>
 </div>
  );
}
