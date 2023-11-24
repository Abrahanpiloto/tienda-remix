import {getGitarras} from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import Guitarra from "~/components/guitarra";
import styles from "~/styles/guitarras.css"

export function meta() {
  return [
    {title: "GuitarLA Tienda"},
    {description: "Guitarla - Nuestra colección de guitarras"}
  ]
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

// loader para obtener los datos de la DB
export async function loader() {
 const guitarras = await getGitarras()
 
  return guitarras.data
 
}

// useLoaderData para mostrar los datos de la DB
function Tienda() {
const guitarras = useLoaderData()


  return (
   <main className="contenedor">
    <h2 className="heading">Nuestra Colección</h2>

    {guitarras?.length && (
      <div className="guitarras-grid">
        {guitarras.map( guitarra => (
          <Guitarra 
            key={guitarra?.id}
            guitarra={guitarra?.attributes}
          />
        ))}
      </div>
    )}
   </main>
  )
}

export default Tienda;