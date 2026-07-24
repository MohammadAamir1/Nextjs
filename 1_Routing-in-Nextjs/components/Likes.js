"use client";

import { useState } from "react";

// export default async function Likes() {
export default function Likes() {
    const [likeCount, setLikeCount] = useState(0);
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    // if(typeof localStorage !== "undefined"){
    //     console.log(localStorage)
    // }

    console.log("Like component");
    return (
     <div
      onClick={() => {
        setLikeCount((prev) => prev + 1);
      }}>{likeCount} Likes</div>
    //  <div onClick={() => {
    //     console.log("Like button clicked");
    //  }}>2K Likes {console.log("Running on server")}</div>
    );
}

// Servers components execute only on the server
// clients components execute on the server as well as on the client