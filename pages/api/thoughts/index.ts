import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'

import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await unstable_getServerSession(req, res, authOptions)
      console.log(session?.user?.email)
      if (session) {
        if (!prisma) {
          return res
            .status(500)
            .json({ status: 'fail', message: 'Something went wrong' })
        }
        const data = req.body
        const { thought } = data

        if (!thought) {
          return res.status(400).json({
            status: 'fail',
            path: 'body',
            message: "Thought can't be empty",
          })
        }

        //@ts-ignore
        const newThought = await prisma.thought.create({
          data: {
            content: thought,
            user: { connect: { email: session?.user?.email! } },
          },
        })

        if (newThought) {
          return res
            .status(201)
            .json({ status: 'success', message: 'Thought created' })
        }
      } else {
        return res.status(401).json({
          status: 'fail',
          message: 'You are not authenticated',
        })
      }
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: 'fail', message: 'Something went wrong' })
    }
  }

  if (req.method === 'GET') {
    try {
      if (!prisma) {
        return res
          .status(500)
          .json({ status: 'fail', message: 'Something went wrong' })
      }
      const thoughts = await prisma.thought.findMany()
      return thoughts
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: 'fail', message: 'Something went wrong' })
    }
  }
}

export default handler
