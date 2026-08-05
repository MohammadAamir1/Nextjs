"use client";
import "./globals.css";

export default function GlobalError() {
//   console.dir(error);
  return (
    <html lang="en" className="dark">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>
          <p>Something went wrong in home page</p>
          <button
            onClick={() => {
            //   reset();
            window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
