export async function getPosts(params={}) {

  const { pageSize=25 } = params;
  
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen&pagination[pageSize]=${pageSize}`);
  
  

  return await respuesta.json()
}

// llama un solo post de la DB
export async function getPost(url) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)

  return await respuesta.json()
}