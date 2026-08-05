"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
//   console.dir(error);
//   console.log(error.digest);
//   console.log(error.message);

  const router = useRouter();
  return (
    <div>
      <p>Something went wrong</p>
      {/* <p>Try to reload this page</p> */}
      <button 
      onClick={() => {
        // window.location.reload();
        startTransition(() => {
          router.refresh();
          reset();
        });
      }}>Try Again</button>
    </div>
  );
}