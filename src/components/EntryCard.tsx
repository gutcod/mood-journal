const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <section className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">summary</div>
      <div className="px-4 py-4 bg-amber-600/70">mood</div>
    </section>
  )
}

export default EntryCard
