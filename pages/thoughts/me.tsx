import { getToken } from 'next-auth/jwt'
import Thoughts from '../../components/Thoughts'
import { getThoughtsOfUser } from '../../lib/crud/thoughts'
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

export const getServerSideProps = async ({ req }: any) => {
  const result = await getThoughtsOfUser(req)
  if (result.redirect) return result
  const _props: PageProps = {
    thoughts: result.thoughts,
    count: result.count,
  }
  return { props: _props }
}
function userThoughts({ thoughts, count }: PageProps) {
  return <Thoughts thoughts={thoughts} count={count} areUserThoughts={true} />
}

export default userThoughts
