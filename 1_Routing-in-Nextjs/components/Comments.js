"use client";

// export default async function Comments() {
//     await new Promise((resolve) => setTimeout(resolve, 15000));
//     return <div>500 Comments</div>
// }

export default function Comments() {
    // if(typeof window === "undefined"){
    //     // return <div>500 Comments Client..</div>
    //     return <div>500 Comments Client</div>
    // }
    // return <div>500 Comments Client</div>
    // return <div>500 Comments {Date.now()}</div>
    return <div>500 Comments {Date.now() ? "5" : "10"}</div>
}
