import { getToken } from 'next-auth/jwt'
import Thoughts from '../../components/Thoughts'

function userThoughts() {
  return <Thoughts thoughts={undefined} count={0} type='userThoughts' />
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
