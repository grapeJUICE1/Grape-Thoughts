import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const data = [
  {
    id: 1,
    body: 'random thought 1 :)',
  },
  {
    id: 2,
    body: 'random thought 2 :) dfdkfjdakf fdkfkdjf',
  },
  {
    id: 3,
    body: 'random thought 3 :) dfdkfjdakf fdkfkdjf',
  },
  {
    id: 4,
    body: 'random thought 4 :) dfdkfjdakf fdkfkdjf',
  },
]
function thoughts() {
  return (
    <VStack mt={10}>
      {data.map((thought) => (
        <Box
          display='flex'
          borderWidth='2px'
          borderRadius='lg'
          borderColor='purple.800'
          w='100%'
          maxW={{ base: '90vw', sm: '80vw', lg: '60vw', xl: '50vw' }}
          h='100vh'
          maxH={{ base: '80vh', sm: '70vh', lg: '50vh', xl: '40vh' }}
          py={10}
          px={5}
          mb='10 !important'
          key={thought.id}
          alignItems='center'
        >
          <Text fontWeight='semibold' wordBreak='break-word' textAlign='center'>
            {thought.body}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default thoughts
