import Comments from "@/components/Comments";
import Link from "next/link";
export const metadata = {
    title: "About",
}

export default function About(){
    return (
        <>
            <h1>About Pages</h1>
            <Link href="/">Home</Link>
            <div>
                <Comments />
            </div>
        </>
    )
}