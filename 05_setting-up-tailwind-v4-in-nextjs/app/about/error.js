"use client";

export default function Error({ error, reset}){
    console.dir(error);
    return (
        <div>
            <p>Something went wrong in client side</p>
            <button
            onClick={() => {
                reset(); // it handle client side error, no require router,startTransition
            }}>Try Again</button>
        </div>
    )
}