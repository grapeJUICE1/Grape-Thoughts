import { Box, Divider, Text, useColorMode, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import ActionButtons from './ActionButtons'

function Thought({
  thought,
  individual,
}: {
  thought: { id: string; content: string }
  individual: boolean
}) {
  const { colorMode } = useColorMode()
  if (individual) console.log('')
  return (
    <Box
      as={Link}
      href={`/thoughts/${thought.id}`}
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
