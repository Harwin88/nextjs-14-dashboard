import { montserrat } from "./ui/fonts";
import "../app/ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${montserrat.className} antialiased`}>
        {children}
      <footer className="py-10 flex justify-center items-center">
       Este es el footer o donde va a ir el componente que va a cargar el menu del footer ♫
      </footer>
      </body>
    </html>
  );
}
