import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css"


export function meta() {
  return [
    {title: "GuitarLA Nosotros"},
    {description: "Venta de guitarras, blog de musica"}
  ]
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img  src={imagen} alt="imagen sobre  nosotros"/>
        
        <div>
          <p>Vestibulum varius placerat dui quis viverra. Cras suscipit mollis laoreet. Integer placerat sit amet augue vitae laoreet. Aliquam congue, risus nec vulputate feugiat, sapien elit fringilla orci, eget viverra purus leo at tellus. Pellentesque auctor ac odio vitae porttitor. Sed eu augue sed metus sagittis malesuada. Nullam id eros sollicitudin, vehicula nisl vel, volutpat lacus.</p>
          <p>Vestibulum varius placerat dui quis viverra. Cras suscipit mollis laoreet. Integer placerat sit amet augue vitae laoreet. Aliquam congue, risus nec vulputate feugiat, sapien elit fringilla orci, eget viverra purus leo at tellus. Pellentesque auctor ac odio vitae porttitor. Sed eu augue sed metus sagittis malesuada. Nullam id eros sollicitudin, vehicula nisl vel, volutpat lacus. Proin sit amet ex vitae lacus lacinia suscipit quis a sem. Nulla facilisi. Nam accumsan tortor eget lorem venenatis, aliquam pulvinar risus rhoncus.</p>
        </div>
      </div>
      
    </main>
  )
}

export default Nosotros;