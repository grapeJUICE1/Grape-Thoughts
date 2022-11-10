import { Button, Center, useDisclosure, VStack } from '@chakra-ui/react'
import SubmitThoughtModal from '../SubmitThoughtModal'
import Thought from './Thought'

function Thoughts({
  thoughts,
}: {
  thoughts: { id: string; content: string }[] | undefined
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
          <Thought key={thought.id} thought={thought} individual={false} />
        ))}
      </VStack>
      <Button
        onClick={async () => {
          console.log('lel')
          const response = await fetch(
            '/api/like/c154fe94-fd7e-48ef-97a1-490d1172fc10',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            }
          )

          const data = await response.json()
          console.log(data)
        }}
      >
        lel
      </Button>
    </>
  )
}

export default Thoughts
