import { getToken } from 'next-auth/jwt'

export async function getBookmarksOfUser(
  req: any,
  take: number,
  cursor: { id: string } | undefined
) {
  const session = await getToken({ req })
  if (!session?.email) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }

  const bookmarks = await prisma?.$transaction([
    prisma?.bookmark.findMany({
      take,
      cursor,
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
