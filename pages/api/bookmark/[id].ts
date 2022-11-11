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

        const bookmarkExists = await prisma.bookmark.findFirst({
          where: {
            user: { email: session?.user?.email! },
            thought: { id: id as string },
          },
          include: { thought: true },
        })

        if (bookmarkExists) {
          await prisma.bookmark.delete({
            where: { id: bookmarkExists.id },
          })
          return res.status(201).json({
            status: 'success',
            message: 'Removed bookmark successfully',
            type: 'unBookmark',
          })
        } else {
          const bookmark = await prisma.bookmark.create({
            data: {
              user: { connect: { email: session?.user?.email! } },
              thought: { connect: { id: id as string } },
            },
          })
          if (!bookmark) {
            res.status(404).json({
              status: 'fail',
              message: 'Thought with this id not found',
            })
          }
          return res.status(201).json({
            status: 'success',
            message: 'Bookmarked the thought successfully',
            type: 'bookmark',
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
