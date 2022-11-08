import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function Me() {
  const { data: session, status } = useSession({ required: true })

  if (status === 'loading') {
    return (
      <Text textAlign='center' mt={10}>
        Loading
      </Text>
    )
  }

  return (
    <Flex
      width={'100vw'}
      height={'90vh'}
      alignContent='center'
      justifyContent='center'
    >
      <Center>
        <VStack>
          <Heading textAlign='center'>
            {session.user ? session.user.email : ''}
          </Heading>

          <HStack justifyContent='center' mt={10}>
            <Button as={Link} href='/thoughts' mx={5} color='purple.500'>
              Your Thoughts
            </Button>
            <Button mx={5} color='purple.500' as={Link} href='/bookmarks'>
              Your Bookmarks
            </Button>
          </HStack>
        </VStack>
      </Center>
    </Flex>
  )
}

export default Me
