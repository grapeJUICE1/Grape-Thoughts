import { Button, Center, useDisclosure, VStack } from '@chakra-ui/react'
import SubmitThoughtModal from '../SubmitThoughtModal'
import Thought from './Thought'

function Thoughts({
  thoughts,
}: {
  thoughts:
    | {
        id: string
        content: string
        likes?: {}
        _count: { likes: number; bookmarks: number }
      }[]
    | undefined
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Center mt={10}>
        <Button color='purple.500' onClick={onOpen} alignItems='center'>
          Submit Thought
        </Button>
      </Center>
      <SubmitThoughtModal isOpen={isOpen} onClose={onClose} />
      <VStack mt={10}>
        {thoughts?.map((thought) => (
          <Thought
            key={thought.id}
            initialThought={thought}
            individual={false}
          />
        ))}
      </VStack>
    </>
  )
}

export default Thoughts
