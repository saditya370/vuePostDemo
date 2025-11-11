const BASE = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts() {
  const res = await fetch(BASE)
  return res.json()
}

export async function getPost(id) {
  const res = await fetch(`${BASE}/${id}`)
  return res.json()
}

export async function deletePost(id) {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return true
}
