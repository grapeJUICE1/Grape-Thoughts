import { Button, Center, useDisclosure, VStack } from '@chakra-ui/react'
import SubmitThoughtModal from '../SubmitThoughtModal'
import Thought from './Thought'

function Thoughts({
  thoughts,
  areBookmarks,
}: {
  thoughts:
    | {
        id: string
        content: string
        likes?: { id: string }[]
        bookmarks?: { id: string }[]
        _count: { likes: number; bookmarks: number }
      }[]
    | {
        thought: {
          id: string
          content: string
          likes?: { id: string }[]
          bookmarks?: { id: string }[]
          _count: { likes: number; bookmarks: number }
        }
      }[]
    | undefined
  areBookmarks: boolean
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
            //@ts-ignore
            key={areBookmarks ? thought.thought.id! : thought.id}
            //@ts-ignore
            initialThought={areBookmarks ? thought.thought : thought}
            individual={false}
          />
        ))}
      </VStack>
    </>
  )
}

export default Thoughts
