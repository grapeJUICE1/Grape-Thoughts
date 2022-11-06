import { VStack, Heading, Flex, Center, Button } from '@chakra-ui/react'
import Link from 'next/link'

function Home() {
  return (
    <Flex
      width={'100vw'}
      height={'100vh'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Center>
        <VStack>
          <Heading> Grape Thoughts </Heading>
          <Button color='purple.600'>
            <Link href='/thoughts'>Browse All Thougths</Link>
          </Button>
        </VStack>
      </Center>
    </Flex>
  )
}

export default Home
