import { useColorMode, VStack } from '@chakra-ui/react'
import Thought from './Thought'

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
function Thoughts() {
  const { colorMode } = useColorMode()
  return (
    <VStack mt={10}>
      {data.map((thought) => (
        <Thought thought={thought} colorMode={colorMode} />
      ))}
    </VStack>
  )
}

export default Thoughts
