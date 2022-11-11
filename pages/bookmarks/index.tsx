import { getToken } from 'next-auth/jwt'
import Bookmarks from '../../components/Bookmarks'

type PageProps = {
  thoughts:
    | {
        thought: {
          id: string
          content: string
          likes?: { id: string }[]
          bookmarks?: { id: string }[]
          _count: { likes: number; bookmarks: number }
        }
      }[]
    | undefined
}

function bookmarks({ thoughts }: PageProps) {
  return <Bookmarks thoughts={thoughts} />
}

export default bookmarks

export const getServerSideProps = async ({ req }: any) => {
  const session = await getToken({ req })
  if (!session?.email) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }

  const bookmarks = await prisma?.bookmark.findMany({
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
  })
  const _props: PageProps = {
    thoughts: bookmarks,
  }
  return { props: _props }
}
