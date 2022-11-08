import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react'

function SubmitThoughtModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  async function createThought() {
    const response = await fetch('/api/thoughts', {
      method: 'POST',
      body: JSON.stringify({ thought: 'lel' }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    console.log(data)
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Submit Thought</ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <form>
              <FormControl id='body'>
                <FormLabel>Thought</FormLabel>
                <Textarea placeholder='i like cock :)' />
              </FormControl>
            </form>
          </ModalBody>
          <Button
            color='white'
            backgroundColor='purple.600'
            mr='auto'
            ml={6}
            mt={5}
            mb={10}
            onClick={createThought}
          >
            Submit
          </Button>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SubmitThoughtModal
