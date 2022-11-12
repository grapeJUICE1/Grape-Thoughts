import { NextApiRequest, NextApiResponse } from 'next'
import { getBookmarksOfUser } from '../../../lib/crud/bookmarks'
import prisma from '../../../lib/prisma'
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      if (!prisma) {
        return res
          .status(500)
          .json({ status: 'fail', message: 'Something went wrong' })
      }

      const { page } = req.query
      const result = await getBookmarksOfUser(
        req,
        10,
        typeof Number(page) === 'number' ? Number(page) * 10 : 0,
        false,
        res
      )
      const thoughts = result.thoughts ? result.thoughts : undefined
      const count = result.count ? result.count : 0
      return res
        .status(200)
        .json({ status: 'success', data: { thoughts: thoughts, count: count } })
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: 'fail', message: 'Something went wrong' })
    }
  }
}

export default handler
