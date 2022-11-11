import { getToken } from 'next-auth/jwt'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import Thought from '../../components/Thoughts/Thought'
import prisma from '../../lib/prisma'
function thougth({ thought }: any) {
  return (
    <>{thought && <Thought initialThought={thought} individual={true} />}</>
  )
}

export default thougth

export async function getServerSideProps({ req, params }: Params) {
  const session = await getToken({ req })
  let thought
  if (session?.email) {
    thought = await prisma?.thought.findUnique({
      where: { id: params.id! },
      select: {
        id: true,
        content: true,
        _count: { select: { likes: true, bookmarks: true } },
        likes: {
          where: { user: { email: session.email } },
          select: { id: true },
        },
        bookmarks: {
          where: { user: { email: session.email } },
          select: { id: true },
        },
      },
    })
  } else {
    thought = await prisma?.thought.findUnique({
      where: { id: params.id! },
      select: {
        id: true,
        content: true,
        _count: { select: { likes: true, bookmarks: true } },
      },
    })
  }
  return {
    props: {
      thought,
    },
  }
}
