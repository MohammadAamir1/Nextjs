/*export const metadata = {
  // title: "Technical Agency",
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}*/

import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
