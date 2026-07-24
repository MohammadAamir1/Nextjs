"use client";
import { usePathname } from "next/navigation"

// export default async function BlogNotFound({ params }){
export default function BlogNotFound(){
    // console.log(params);
    // for shows in console what id search which is wrong
    const a = usePathname();
    console.log(a);
    return (
        <>
            <h1>Blog Page not found!</h1>
            <p>Could not found the page you are looking for.</p>
        </>
    )
}