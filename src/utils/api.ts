const createURL = (path: string) => window.location.origin + path

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
