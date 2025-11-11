const BASE = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts() {
  const res = await fetch(BASE)
  return res.json()
}

export async function getPost(id) {
  const res = await fetch(`${BASE}/${id}`)
  return res.json()
}

