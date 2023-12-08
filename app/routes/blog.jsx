import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";
import {getPosts} from "~/models/posts.server";
import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()
 

  return posts.data
}

export function meta() {
  return [
    {title: "GuitarLA Blog"},
    {description: "Blog de musica y venta de guitarras GuitarLA"}
  ]
}

function Blog() {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <ListadoPosts 
        posts={posts}
      />
    </main>
  )
}

export default Blog;