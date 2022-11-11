import Thoughts from '../../components/Thoughts'
import { getThoughtsOfUser } from '../../lib/crud/thoughts'

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
  const result = await getThoughtsOfUser(req, 10, 0)
  if (result?.redirect) return result
  const _props: PageProps = {
    //@ts-ignore
    thoughts: result.thoughts,
    //@ts-ignore
    count: result.count,
  }
  return { props: _props }
}
function userThoughts({ thoughts, count }: PageProps) {
  return <Thoughts thoughts={thoughts} count={count} type='userThoughts' />
}

export default userThoughts
