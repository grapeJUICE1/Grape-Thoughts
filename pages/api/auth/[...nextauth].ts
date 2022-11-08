import { verify } from 'argon2'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prisma'

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      //@ts-ignore
      async authorize(credentials: any) {
        const email = credentials?.email
        const password = credentials?.password

        if (!prisma) {
          return null
        }

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) return null

        const passwordIsValid = await verify(user.password, password)

        if (!passwordIsValid) return null

        return { email: user.email }
      },
    }),
  ],
}

export default NextAuth(authOptions)
