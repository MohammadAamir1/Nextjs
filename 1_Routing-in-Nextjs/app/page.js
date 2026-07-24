import Link from "next/link";
import ComponentPage from "./_components/page";

export default function Home() {
  // console.log(await searchParams);
  // console.log(await params);
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link active">
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
      <div>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </div>
    </>
  );
}
