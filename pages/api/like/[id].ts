import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import prisma from '../../../lib/prisma'
import { authOptions } from '../auth/[...nextauth]'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await unstable_getServerSession(req, res, authOptions)
      if (session) {
        if (!prisma) {
          return res.status(500).json({
            status: 'fail',
            message: 'Something went wrong',
          })
        }
        const { id } = req.query

        //@ts-ignore

        const likeExists = await prisma.like.findFirst({
          where: {
            user: { email: session?.user?.email! },
            thought: { id: id as string },
          },
          include: { thought: true },
        })

        if (likeExists) {
          const like = await prisma.like.delete({
            where: { id: likeExists.id },
            include: { thought: true },
          })
          return res.status(201).json({
            status: 'success',
            message: 'Unliked the thought successfully',
            newThought: like.thought,
          })
        } else {
          const like = await prisma.like.create({
            data: {
              user: { connect: { email: session?.user?.email! } },
              thought: { connect: { id: id as string } },
            },
            include: { thought: true },
          })
          if (!like) {
            res
              .status(404)
              .json({
                status: 'fail',
                message: 'Thought with this id not found',
              })
          }
          return res.status(201).json({
            status: 'success',
            message: 'Liked the thought successfully',
            newThought: like.thought,
          })
        }
      }
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        status: 'fail',
        message: 'Something went wrong',
      })
    }
  }
}

export default handler
