import Editor from '@/src/components/Editor'
import { getUserByClerkId } from '@/src/utils/auth'
import { prisma } from '@/src/utils/db'

const getEntry = async (id) => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  })
  return entry
}

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)
  return (
    <div className="w-full h-full">
      <Editor entry={entry} />
    </div>
  )
}

export default EntryPage
