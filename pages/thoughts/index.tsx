import { Thought } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Thoughts from '../../components/Thoughts'
import prisma from '../../lib/prisma'

type PageProps = {
  thoughts: { id: string; content: string }[] | undefined
}

export const getServerSideProps: GetServerSideProps = async () => {
  const thoughts = await prisma?.thought.findMany({
    orderBy: [{ createdAt: 'desc' }],
    select: { id: true, content: true, createdAt: false, updatedAt: false },
  })
  const _props: PageProps = {
    thoughts: thoughts,
  }
  return { props: _props }
}
function thoughts(props: PageProps) {
  return <Thoughts thoughts={props.thoughts} />
}

export default thoughts
