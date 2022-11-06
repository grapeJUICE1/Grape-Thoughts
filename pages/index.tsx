import {
  VStack,
  Heading,
  Flex,
  Center,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import Grape from '../icons/Grape'

function Home() {
  return (
    <Flex
      width={'100vw'}
      height={'90vh'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Center>
        <VStack>
          <Heading>
            <HStack>
              <Grape width='2.5rem' height='2.5rem' />
              <Text>Grape Thoughts</Text>
              <Grape width='2.5rem' height='2.5rem' />
            </HStack>
          </Heading>
          <Link href='/thoughts'>
            <Button color='purple.600'>Browse All Thougths</Button>
          </Link>
        </VStack>
      </Center>
    </Flex>
  )
}

export default Home
