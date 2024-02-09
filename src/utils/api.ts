const createURL = (path: string) => window.location.origin + path

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    }),
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  }
  if (!res.ok) {
    console.error(res)
  }
}

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
    }),
  )
  if (res.ok) {
    return res.json()
  }
  if (!res.ok) {
    console.error(res)
  }
}
