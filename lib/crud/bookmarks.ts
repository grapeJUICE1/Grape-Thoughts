import { getToken } from 'next-auth/jwt'
import prisma from '../../lib/prisma'

export async function getBookmarksOfUser(
  req: any,
  take: number,
  skip: number,
  getServerSideProps = true,
  res: any = undefined
) {
  const session = await getToken({ req })
  if (!session?.email) {
    if (getServerSideProps) {
      return {
        redirect: {
          destination: '/',
        },
      }
    } else {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You are not authenticated' })
    }
  }

  const bookmarks = await prisma?.$transaction([
    prisma?.bookmark.findMany({
      take,
      skip,
      where: { user: { email: session.email } },
      orderBy: [{ createdAt: 'desc' }],
      select: {
        thought: {
          select: {
            id: true,
            content: true,
            createdAt: false,
            updatedAt: false,
            _count: { select: { likes: true, bookmarks: true } },
            likes: {
              where: { user: { email: session.email } },
              select: { id: true },
            },
            bookmarks: {
              where: { user: { email: session.email } },
              select: { id: true },
            },
          },
        },
      },
    }),
    prisma.bookmark.count({ where: { user: { email: session.email } } }),
  ])

  if (bookmarks) {
    return { count: bookmarks[1], thoughts: bookmarks[0] }
  } else {
    return { count: 0, thoughts: undefined }
  }
}
