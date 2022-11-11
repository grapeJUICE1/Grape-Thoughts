import Thoughts from '../../components/Thoughts'
import { getBookmarksOfUser } from '../../lib/crud/bookmarks'

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
  count: number
}

function bookmarks({ thoughts, count }: PageProps) {
  return <Thoughts thoughts={thoughts} areBookmarks={true} count={count} />
}

export default bookmarks

export const getServerSideProps = async ({ req }: any) => {
  const result = await getBookmarksOfUser(req, 10, 0)
  if (result?.redirect) return result
  const _props: PageProps = {
    //@ts-ignore
    thoughts: result.thoughts,
    //@ts-ignore
    count: result.count,
  }
  return { props: _props }
}
