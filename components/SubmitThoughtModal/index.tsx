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
} from '@chakra-ui/react'
import { SyntheticEvent, useRef, useState } from 'react'

function SubmitThoughtModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [contentValue, setContentValue] = useState('')
  const [contentMsg, setContentMsg] = useState('')
  const [formMsg, setFormMsg] = useState({ success: true, msg: '' })
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
  const [inputDisabled, setInputDisabled] = useState(false)

  async function createThought(content: string) {
    const response = await fetch('/api/thoughts', {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    if (data.isOperational === true) {
      if (data.path === 'content') {
        setContentMsg(data.message)
      } else if (data.status === 'success') {
        setFormMsg({ success: true, msg: 'Thought created successfully' })
      } else if (data.status === 'fail') {
        setFormMsg({ success: false, msg: data.message })
      }
    } else if (!response.ok) {
      setFormMsg({ success: false, msg: 'Something went wrong' })
    }
    setSubmitButtonDisabled(false)
    setInputDisabled(false)
  }

  async function submitHandler(evt: SyntheticEvent) {
    evt.preventDefault()
    setSubmitButtonDisabled(true)
    setInputDisabled(true)
    console.log('works')
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

          {formMsg.msg && (
            <Text
              ml={6}
              mb={10}
              color={formMsg.success ? 'green.400' : 'red.500'}
            >
              {formMsg.msg}
            </Text>
          )}
        </form>
      </ModalContent>
    </Modal>
  )
}

export default SubmitThoughtModal
