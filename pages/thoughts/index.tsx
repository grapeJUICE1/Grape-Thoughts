import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Thoughts from '../../components/Thoughts'
import { getThoughts } from '../../lib/crud/thoughts'

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
  const result = await getThoughts(req, 10, 0)
  const _props: PageProps = {
    thoughts: result.thoughts,
    count: result.count,
  }
  return { props: _props }
}
function thoughts({ thoughts, count }: PageProps) {
  return (
    <>
      <Head>
        <title>All Thoughts</title>
      </Head>
      <Thoughts thoughts={thoughts} type='thoughts' count={count} />
    </>
  )
}

export default thoughts
