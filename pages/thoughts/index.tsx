import { GetServerSideProps } from 'next'
import { getToken } from 'next-auth/jwt'
import Thoughts from '../../components/Thoughts'
import prisma from '../../lib/prisma'

type PageProps = {
  thoughts:
    | {
        id: string
        content: string
        likes?: {}
        _count: { likes: number; bookmarks: number }
      }[]
    | undefined
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getToken({ req })
  let thoughts
  if (session?.email) {
    thoughts = await prisma?.thought.findMany({
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
      },
    })
  } else {
    thoughts = await prisma?.thought.findMany({
      orderBy: [{ createdAt: 'desc' }],
      select: {
        id: true,
        content: true,
        createdAt: false,
        updatedAt: false,
        _count: { select: { likes: true, bookmarks: true } },
      },
    })
  }
  const _props: PageProps = {
    thoughts: thoughts,
  }
  return { props: _props }
}
function thoughts(props: PageProps) {
  return <Thoughts thoughts={props.thoughts} />
}

export default thoughts
