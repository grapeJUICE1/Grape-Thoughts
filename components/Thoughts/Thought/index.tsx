import {
  Box,
  Divider,
  Text,
  useColorMode,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ActionButtons from './ActionButtons'

function Thought({
  initialThought,
  individual,
}: {
  initialThought: {
    id: string
    content: string
    _count: { likes: number; bookmarks: number }
  }
  individual: boolean
}) {
  const { colorMode } = useColorMode()
  const router = useRouter()
  const [thought, setThought] = useState(() => initialThought)
  const toast = useToast()
  async function like() {
    toast({
      title: 'Please wait for a few seconds',
      isClosable: true,
      duration: null,
    })
    const response = await fetch(`/api/like/${thought.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()

    if (data.status === 'success') {
      toast.closeAll()
      toast({
        title: data.message,
        status: 'success',
        duration: 1000,
      })
      if (data.type === 'like') {
        const newThought = {
          ...thought,
          _count: {
            likes: thought._count.likes + 1,
            bookmarks: thought._count.bookmarks,
          },
        }
        setThought(newThought)
      } else if (data.type === 'unlike') {
        const newThought = {
          ...thought,
          _count: {
            likes: thought._count.likes - 1,
            bookmarks: thought._count.bookmarks,
          },
        }
        setThought(newThought)
      }
    }
  }
  return (
    <Box
      display='flex'
      borderWidth='1.5px'
      borderRadius='lg'
      borderColor='purple.800'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '60vw', xl: '50vw' }}
      h='auto'
      pt={10}
      px={5}
      mb='10 !important'
      alignItems='center'
      cursor='pointer'
      _hover={{ bg: colorMode === 'dark' ? 'gray.700' : 'gray.200' }}
      _focus={{ boxShadow: 'outline' }}
      mx={individual ? 'auto' : ''}
    >
      <VStack mx='auto'>
        <Text
          mx='auto'
          fontSize='1.2rem'
          wordBreak='break-word'
          textAlign='center'
          onClick={
            individual
              ? () => ''
              : () => router.replace(`/thoughts/${thought.id}`)
          }
        >
          {thought.content}
        </Text>
        <Divider width='40vw' borderColor='purple.800' />
        <ActionButtons likeFunc={like} count={thought._count} />
      </VStack>
    </Box>
  )
}

export default Thought
