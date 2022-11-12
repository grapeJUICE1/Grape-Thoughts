import { getToken } from 'next-auth/jwt'
import Head from 'next/head'
import Thoughts from '../../components/Thoughts'

function userThoughts() {
  return (
    <>
      <Head>
        <title>Your Thoughts</title>
      </Head>
      <Thoughts thoughts={undefined} count={0} type='userThoughts' />
    </>
  )
}

export default userThoughts

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
