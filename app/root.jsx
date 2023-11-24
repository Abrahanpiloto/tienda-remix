import {
  Meta, Links, Outlet, LiveReload, Scripts
} from "@remix-run/react";

import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";


export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@400;700;900&family=Mukta:wght@400;600&family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export default function App() {
  
  return(
    <Document>
      <Outlet />
    </Document>
    
  )
  
}

// layout principal
function Document({children}) {
  return (
    <html lang="es">
      <head>
    
       <meta charSet="utf-8" />
       <meta
         name="viewport"
         content="width=device-width,initial-scale=1"
         
       />
       <Meta />
       <Links />
      </head>
      <body>
        <Header />
        {children}
        
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}