import {
  Box,
  Divider,
  HStack,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import Bookmark from '../../icons/Bookmark'
import Heart from '../../icons/Heart'

const data = [
  {
    id: 1,
    body: 'right lel',
  },
  {
    id: 2,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non condimentum enim. Vestibulum ac est finibus, iaculis elit in, consectetur lorem. Nulla neque neque, pretium vitae tempor non, egestas nec odio. Vestibulum sit amet erat semper tortor bibendum sollicitudin non vitae dolor. Sed nec ultricies dui, vel mollis felis. Sed at suscipit ante. Aliquam sem justo, tincidunt non ligula quis, semper sagittis velit. Etiam iaculis dignissim elit, sit amet rutrum augue. Donec vulputate sem velit, non efficitur justo accumsan sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non condimentum enim. Vestibulum ac est finibus, iaculis elit in, consectetur lorem. Nulla neque neque, pretium vitae tempor non, egestas nec odio. Vestibulum sit amet erat semper tortor bibendum sollicitudin non vitae dolor. Sed nec ultricies dui, vel mollis felis. Sed at suscipit ante. Aliquam sem justo, tincidunt non ligula quis, semper sagittis velit. Etiam iaculis dignissim elit, sit amet rutrum augue. Donec vulputate sem velit, non efficitur justo accumsan sit.',
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
  const { colorMode } = useColorMode()
  return (
    <VStack mt={10}>
      {data.map((thought) => (
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
            <HStack pb='3' pt='3'>
              <Heart
                _hover={{ fill: 'red.500' }}
                _active={{ fill: 'red.200' }}
                _focus={{ fill: 'red.500' }}
                height='1.5rem'
                width='1.5rem'
                fill='none'
                stroke='red.500'
              />
              <p style={{ paddingRight: '1.5rem' }}>Like</p>
              <Bookmark
                _hover={{ fill: 'orange.400' }}
                _active={{ fill: 'orange.200' }}
                _focus={{ fill: 'red.700' }}
                height='1.5rem'
                width='1.5rem'
                fill='none'
                stroke='orange.400'
              />
              <p>Bookmark</p>
            </HStack>
          </VStack>
        </Box>
      ))}
    </VStack>
  )
}

export default thoughts
