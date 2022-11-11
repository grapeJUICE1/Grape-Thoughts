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
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'

function SubmitThoughtModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [contentValue, setContentValue] = useState('')
  const [contentMsg, setContentMsg] = useState('')
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
  const [inputDisabled, setInputDisabled] = useState(false)
  const router = useRouter()
  const toast = useToast()
  async function createThought(content: string) {
    toast({
      title: 'Please wait for a few seconds',
      isClosable: true,
      duration: null,
    })
    const response = await fetch('/api/thoughts', {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    toast.closeAll()
    if (data.isOperational === true) {
      if (data.path === 'content') {
        setContentMsg(data.message)
      } else if (data.status === 'success') {
        toast({
          title: 'Thought created successfully',
          status: 'success',
          duration: 1000,
        })
        setTimeout(() => router.replace(`/thoughts/${data.thoughtId}`), 1000)
      } else if (data.status === 'fail') {
        toast({
          title: data.message,
          status: 'error',
          duration: 1000,
        })
      }
    } else if (!response.ok) {
      toast({
        title: 'Something went wrong',
        status: 'error',
        duration: 1000,
      })
    }
    setSubmitButtonDisabled(false)
    setInputDisabled(false)
  }

  async function submitHandler(evt: SyntheticEvent) {
    evt.preventDefault()
    setSubmitButtonDisabled(true)
    setInputDisabled(true)
    await createThought(contentValue)
  }

  function textAreaOnChangeHandler(evt: SyntheticEvent) {
    evt.preventDefault()
    const content = (evt.target as HTMLTextAreaElement).value

    //validation checks
    if (content.length < 3) {
      setContentMsg('Thought must have atleast 3 characters')
      setContentValue(content)
      return
    }
    if (content.length > 100) {
      setContentMsg("Thought can't surpass 100 characters")
      return
    }

    //no errors
    setContentValue(content)
    setContentMsg('')
    setSubmitButtonDisabled(false)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <form onSubmit={submitHandler}>
          <ModalHeader>Submit Thought</ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <FormControl id='body'>
              <FormLabel>Thought</FormLabel>
              <Textarea
                value={contentValue}
                onChange={textAreaOnChangeHandler}
                placeholder='i like cock :)'
                disabled={inputDisabled}
              />
            </FormControl>
            {contentMsg && <Text color='red.500'>{contentMsg}</Text>}
          </ModalBody>
          <Button
            color='white'
            backgroundColor='purple.600'
            mr='auto'
            ml={6}
            mt={5}
            mb={10}
            type='submit'
            disabled={submitButtonDisabled}
          >
            Submit
          </Button>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default SubmitThoughtModal
