import { GetServerSideProps } from 'next'
import { getToken } from 'next-auth/jwt'
import Thoughts from '../../components/Thoughts'
import { getThoughts } from '../../lib/crud/thoughts'
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
  count: number
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const result = await getThoughts(req)
  const _props: PageProps = {
    thoughts: result.thoughts,
    count: result.count,
  }
  return { props: _props }
}
function thoughts({ thoughts, count }: PageProps) {
  return <Thoughts thoughts={thoughts} count={count} />
}

export default thoughts
