//  _index.jsx, el guion bajo indicara que esa es la pagina de inicio y tu componente podra renderizarse al abrir la pagina de primeras o en la ruta ' / '
export function meta() {
  return [
    {title: "GuitarLA Inicio"}
  ]
}

function Index() {
  return (
    <div>desde index.jsx probando un dos tres</div>
  )
}

export default Index;