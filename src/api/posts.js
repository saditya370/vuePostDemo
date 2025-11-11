const BASE = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts() {
  const res = await fetch(BASE)
  return res.json()
}
