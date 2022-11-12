import { getToken } from 'next-auth/jwt'
import Head from 'next/head'
import Thoughts from '../../components/Thoughts'

function bookmarks() {
  return (
    <>
      <Head>
        <title>Your Bookmarks</title>
      </Head>
      <Thoughts thoughts={undefined} type='bookmarks' count={0} />
    </>
  )
}

export default bookmarks

export async function getServerSideProps({ req }: any) {
  const token = await getToken({ req })

  if (token) return { props: {} }
  else
    return {
      redirect: {
        destination: '/',
      },
    }
}
