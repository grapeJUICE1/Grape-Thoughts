import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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
          >
            Submit
          </Button>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SubmitThoughtModal
