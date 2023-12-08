import {getGitarras} from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import stylesGuitarras from "~/styles/guitarras.css";

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
      href: stylesGuitarras
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
      <ListadoGuitarras 
        guitarras={guitarras}
      />
   </main>
  )
}

export default Tienda;