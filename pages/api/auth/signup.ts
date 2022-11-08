import { hash } from 'argon2'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      status: 'fail',
      message: 'This route can only handle POST requests',
    })
  }

  try {
    if (!prisma) {
      return res
        .status(500)
        .json({ status: 'fail', message: 'Something went wrong' })
    }
    const data = req.body

    const { email, password } = data
    if (!email) {
      return res.status(400).json({
        status: 'fail',
        path: 'email',
        message: "Email can't be empty",
      })
    }

    if (!password) {
      return res.status(400).json({
        status: 'fail',
        path: 'password',
        message: "Password can't be empty",
      })
    }
    const emailExists = await prisma.user.findUnique({ where: { email } })
    if (emailExists) {
      return res.status(409).json({
        status: 'fail',
        path: 'email',
        message: 'Email already exists',
      })
    }

    if (password.length < 8) {
      return res.status(400).json({
        status: 'fail',
        path: 'password',
        message: 'Password must be greater than 8 characters',
      })
    }
    const hashedPassword = await hash(password)
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    })

    if (newUser) {
      return res
        .status(201)
        .json({ status: 'success', message: 'User Created' })
    }
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ status: 'fail', message: 'Something went wrong' })
  }
}

export default handler
