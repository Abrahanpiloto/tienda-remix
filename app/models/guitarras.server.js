// llama todas las guitarra de la DB
export async function getGitarras(params={}) {
  
  const { pageSize=25 } = params;
  
  
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen&pagination[pageSize]=${pageSize}`); // despues del signo "?" se le indica a la url que son parametros (query params)

  const resultado = await respuesta.json()
 
  return resultado
}

// llama una sola guitarra de la DB
export async function getGuitarra(url) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

  return await respuesta.json()
}