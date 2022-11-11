import { getToken } from 'next-auth/jwt'

export async function getThoughts(req: any) {
  const session = await getToken({ req })
  let thoughts
  if (session?.email) {
    thoughts = await prisma?.$transaction([
      prisma?.thought.findMany({
        orderBy: [{ createdAt: 'desc' }],
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
      }),
      prisma?.thought.count(),
    ])
  } else {
    thoughts = await prisma?.$transaction([
      prisma?.thought.findMany({
        orderBy: [{ createdAt: 'desc' }],
        select: {
          id: true,
          content: true,
          createdAt: false,
          updatedAt: false,
          _count: { select: { likes: true, bookmarks: true } },
        },
      }),
      prisma?.thought.count(),
    ])
  }
  if (thoughts) {
    return { count: thoughts[1], thoughts: thoughts[0] }
  } else {
    return { count: 0, thoughts: undefined }
  }
}

export async function getThoughtsOfUser(req: any) {
  const session = await getToken({ req })
  if (!session?.email) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  const thoughts = await prisma?.$transaction([
    prisma.thought.findMany({
      where: { user: { email: session.email } },
      orderBy: [{ createdAt: 'desc' }],
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
    }),
    prisma.thought.count({
      where: { user: { email: session.email } },
    }),
  ])

  if (thoughts) {
    return { count: thoughts[1], thoughts: thoughts[0] }
  } else {
    return { count: 0, thoughts: undefined }
  }
}
