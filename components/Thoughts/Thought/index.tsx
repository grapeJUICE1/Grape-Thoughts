import { Box, Divider, Text, useColorMode, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ActionButtons from './ActionButtons'

function Thought({
  thought,
  individual,
}: {
  thought: { id: string; content: string }
  individual: boolean
}) {
  const { colorMode } = useColorMode()
  const router = useRouter()
  if (individual) console.log('')
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
      onClick={
        individual ? () => '' : () => router.replace(`/thoughts/${thought.id}`)
      }
    >
      <VStack mx='auto'>
        <Text
          mx='auto'
          fontSize='1.2rem'
          wordBreak='break-word'
          textAlign='center'
        >
          {thought.content}
        </Text>
        <Divider width='40vw' borderColor='purple.800' />
        <ActionButtons />
      </VStack>
    </Box>
  )
}

export default Thought
