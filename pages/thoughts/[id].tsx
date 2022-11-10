import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import Thought from '../../components/Thoughts/Thought'
import prisma from '../../lib/prisma'
function thougth({ thought }: any) {
  console.log(thought)
  return (
    <>{thought && <Thought initialThought={thought} individual={true} />}</>
  )
}

export default thougth

export async function getServerSideProps({ params }: Params) {
  const thought = await prisma?.thought.findUnique({
    where: { id: params.id! },
    select: { id: true, content: true, _count: { select: { likes: true } } },
  })

  return {
    props: {
      thought,
    },
  }
}
