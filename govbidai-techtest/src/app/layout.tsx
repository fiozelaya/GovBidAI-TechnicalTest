import "./globals.css";
import NavBar from "@/components/NavBar";

function Layout({children}) {
  
  return (
    <html lang="en">
    <body>
    
      <NavBar />
      <br />
      
      {children}
    </body>
    </html>
  );
}

export default Layout;
