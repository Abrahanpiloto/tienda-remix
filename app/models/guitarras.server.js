// llama todas las guitarra de la DB
export async function getGitarras() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const resultado = await respuesta.json()

  return resultado
}

// llama una sola guitarra de la DB
export async function getGuitarra(url) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

  return await respuesta.json()
}