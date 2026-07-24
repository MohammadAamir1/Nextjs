import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;
// ISR
// export const revalidate = 5; // first option


// SSG
// export async function generateStaticParams() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);
//   return data.map(({id}) => ({ blogID: `${id}`}));

  // return [
  //   {blogID: "1" },
  //   {blogID: "2" },
  //   {blogID: "3" },
  //   {blogID: "4" },
  //   {blogID: "5" },
  // ];
// }

/*export async function generateMetadata({ params }){
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}
export default async function Blog({ params }){
  // console.log(await params)
  const  { blogID } = await params;
  // if (blogID === "test") {
  if (!/^\d+$/.test(blogID)) {
    notFound();
  }
  return (
    <div>Blog {blogID}</div>
  )
}*/

const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log("blogID: ", blogID);
  //  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
  //   next: {revalidate: 5 }, // second option
  //  });
  // const data = await response.json();
  // console.log(data);
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
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2>Date: {new Date().toLocaleString()}</h2>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;