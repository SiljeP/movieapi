import "./globals.css";
import "../../public/service-worker"

export const metadata = {
  title: "MovieAPI",
  description: "Generated by create next app",


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};


