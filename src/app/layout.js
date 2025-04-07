import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomProvider from "./provider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
