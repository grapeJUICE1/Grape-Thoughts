import { getToken } from 'next-auth/jwt'
import Thoughts from '../../components/Thoughts'
import prisma from '../../lib/prisma'

type PageProps = {
  thoughts:
    | {
        id: string
        content: string
        likes?: { id: string }[]
        bookmarks?: { id: string }[]
        _count: { likes: number; bookmarks: number }
      }[]
    | undefined
}

export const getServerSideProps = async ({ req }: any) => {
  const session = await getToken({ req })
  if (!session?.email) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  const thoughts = await prisma?.thought.findMany({
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
  })
  const _props: PageProps = {
    thoughts: thoughts,
  }
  return { props: _props }
}
function userThoughts(props: PageProps) {
  return <Thoughts thoughts={props.thoughts} />
}

export default userThoughts
