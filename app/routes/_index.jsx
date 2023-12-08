//  **NOTA: _index.jsx, el guion bajo indicara que esa es la pagina de inicio y tu componente podra renderizarse al abrir la pagina de primeras o en la ruta ' / '
import { useLoaderData } from "@remix-run/react";
import { getGitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import ListadoGuitarras from "~/components/listado-guitarras";
import ListadoPosts from "~/components/listado-posts";
import Curso from "~/components/curso";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesBlogs from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css";


export function meta() {
  return [
    {title: "GuitarLA Inicio"}
  ]
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: "stylesheet",
      href: stylesBlogs
    },
    {
      rel: "stylesheet",
      href: stylesCurso
    }
  ]
}

export async function loader() {

  const [guitarras, posts, curso] = await Promise.all([
    getGitarras({pageSize: 3}),
    getPosts({pageSize: 3}),
    getCurso()
 ])

 console.log(curso)

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {
  const {guitarras, posts, curso} = useLoaderData();
  
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className="contenedor">
        <ListadoPosts 
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index;