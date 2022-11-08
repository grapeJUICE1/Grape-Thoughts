import { verify } from 'argon2'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prisma'
import AppError from '../../../lib/AppError'

export const authOptions: NextAuthOptions = {
  // session: { strategy: 'jwt' },
  providers: [
    //@ts-ignore
    CredentialsProvider({
      //@ts-ignore
      async authorize(credentials: any) {
        const email = credentials?.email
        const password = credentials?.password

        if (!prisma) {
          throw new Error('Something went wrong')
        }

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) throw new AppError('email', 'No User Found')

        const passwordIsValid = await verify(user.password, password)

        if (!passwordIsValid) throw new AppError('password', 'Invalid Password')
        return { email: user.email }
      },
    }),
  ],
}

export default NextAuth(authOptions)
