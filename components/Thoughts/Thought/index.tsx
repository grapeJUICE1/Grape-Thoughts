import { Box, Divider, Text, VStack } from '@chakra-ui/react'
import ActionButtons from './ActionButtons'

function Thought({
  thought,
  colorMode,
}: {
  thought: { id: number; body: string }
  colorMode: string
}) {
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
      key={thought.id}
      alignItems='center'
      _hover={{ bg: colorMode === 'dark' ? 'gray.700' : 'gray.200' }}
      _focus={{ boxShadow: 'outline' }}
    >
      <VStack mx='auto'>
        <Text
          mx='auto'
          fontSize='1.2rem'
          wordBreak='break-word'
          textAlign='center'
        >
          {thought.body}
        </Text>
        <Divider width='40vw' borderColor='purple.800' />
        <ActionButtons />
      </VStack>
    </Box>
  )
}

export default Thought
