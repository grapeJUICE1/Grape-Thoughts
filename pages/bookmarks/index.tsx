import Thoughts from '../../components/Thoughts'

// type PageProps = {
//   thoughts:
//     | {
//         thought: {
//           id: string
//           content: string
//           likes?: { id: string }[]
//           bookmarks?: { id: string }[]
//           _count: { likes: number; bookmarks: number }
//         }
//       }[]
//     | undefined
//   count: number
// }
//
function bookmarks() {
  return <Thoughts thoughts={undefined} type='bookmarks' count={0} />
}

export default bookmarks

// export const getServerSideProps = async ({ req }: any) => {
//   const result = await getBookmarksOfUser(req, 10, 0)
//   if (result?.redirect) return result
//   const _props: PageProps = {
//     //@ts-ignore
//     thoughts: result.thoughts,
//     //@ts-ignore
//     count: result.count,
//   }
//   return { props: _props }
// }
