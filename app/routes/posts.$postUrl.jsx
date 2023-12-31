import { getPost } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";
import stylos from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylos
    }
  ]
}



// script que consulta el post en la DB:
export async function loader({params}) {
  const {postUrl} = params
 
  const post = await getPost(postUrl)

  if(post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no Encontrado",
      // data: {}
    })
  }
  return post
}


export function meta({data}) {

  if(!data) {
    return [
      {title: "GuitarLA - Guitarra no encontrada"},
      {description: "Guitarras, venta de guitarras, post no encontrado"}
    ]
  }
  
  return [
    
      {title: `GuitarLA - ${data.data[0].attributes.titulo}`},
      {description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}`}
    
  ]
}

// Componente que muestra o renderiza el articulo o post:
export default function Post() {

  const post = useLoaderData()
  
  const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes

  return (
    <article className="contenedor post mt-4">
      <img className='imagen' src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`}/>
        <div className='contenido'>
          <h3>{titulo}</h3>
          <p className="fecha">{formatearFecha(publishedAt)}</p>
          <p className='texto'>{contenido}</p>
         
        </div>
    </article>
    
  )
}
