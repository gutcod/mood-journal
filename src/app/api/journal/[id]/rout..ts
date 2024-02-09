import { prisma } from '@/src/utils/db'
import { getUserByClerkId } from '@/src/utils/auth'

export const PATCH = async (req:Request, { params }) => {
  const {content} = await req.json()
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.update({
    where: { userId_id: { userId: user.id, id: params.id },
    data: {
      content,
    }
  })

  return entry
}
