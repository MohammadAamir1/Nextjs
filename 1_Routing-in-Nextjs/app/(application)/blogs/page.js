// "use client"

import Button from "@/components/Button";
import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Loading from "@/components/Loading";
import Views from "@/components/Views";
import Link from "next/link";
import { Suspense } from "react";
// export const metadata = {
//   title: "Blogs",
// };

// export default async function Blogs({ params }) {
export default function Blogs({ params }) {
  // console.log(await params);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div className="blog-links">
        <h1>Welcome to our Blogs</h1>
        <Button />
        {/* <ol>Blog 1</ol>
        <ol>Blog 2</ol>
        <ol>Blog 3</ol> */}
      </div>
      <div className="blog-links">
        <br />
        {/* <Suspense fallback={<Loading children="Views"/>}>
          <Views />
        </Suspense> */}
        <Suspense fallback={<div>"Loading Likes..."</div>}>
          <Likes />
        </Suspense>
        {/* <Suspense fallback={<div>"Loading Comments..."</div>}>
          <Comments />
        </Suspense> */}
        
      </div>
    </>
  );
}
