import { Button, Center, Flex, useToast, VStack } from '@chakra-ui/react'
import { getToken } from 'next-auth/jwt'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import Thought from '../../components/Thoughts/Thought'
import prisma from '../../lib/prisma'
import { CopyIcon } from '@chakra-ui/icons'
import Head from 'next/head'
function IndividualThoughtPage({ thought, isAuthenticated }: any) {
  const toast = useToast()
  return (
    <>
      {thought ? (
        <Flex
          width={'100vw'}
          height={'90vh'}
          alignContent={'center'}
          justifyContent={'center'}
        >
          <Head>
            <title>Thought</title>
            <meta property='og:title' content='Thought' />
            <meta property='twitter:title' content='Thought' />
            <meta property='og:description' content={`${thought.content}`} />
            <meta
              property='twitter:description'
              content={`${thought.content}`}
            />
            <meta property='description' content={`${thought.content}`} />
            <meta property='og:type' content='article' />
          </Head>
          <Center>
            <VStack>
              <Thought
                initialThought={thought}
                individual={true}
                isAuthenticated={isAuthenticated ? true : false}
              />
              <Button
                color='purple.600'
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  toast({
                    description: 'copied to clipboard',
                    status: 'success',
                    duration: 1000,
                  })
                }}
              >
                <CopyIcon mr={3} /> Share this thought
              </Button>
            </VStack>
          </Center>
        </Flex>
      ) : (
        <p>Thought with that id not found</p>
      )}
    </>
  )
}

export default IndividualThoughtPage

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
      isAuthenticated: session,
    },
  }
}
