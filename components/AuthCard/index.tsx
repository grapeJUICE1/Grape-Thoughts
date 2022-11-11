import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { SyntheticEvent, useRef, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

function AuthCard() {
  type authType = 'login' | 'signup'
  const [authType, setAuthType] = useState<authType>('login')

  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const [disableForm, setDisableForm] = useState(false)

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const [successMessage, setSuccessMessage] = useState('')

  const router = useRouter()

  async function createUser(email: string, password: string) {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      if (data.path === 'email') {
        setEmailErrorMsg(data.message!)
      }
      if (data.path === 'password') {
        setPasswordErrorMsg(data.message)
      }
    } else {
      setSuccessMessage('Signup Successful')
      setTimeout(() => router.replace('/thoughts'), 1000)
    }
  }
  async function submitHandler(evt: SyntheticEvent) {
    evt.preventDefault()
    setDisableForm(true)
    setEmailErrorMsg('')
    setPasswordErrorMsg('')

    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value

    //validation checks
    let formInvalid = false
    if (!email) {
      setEmailErrorMsg("Email can't be empty")
      formInvalid = true
    } else if (!validateEmail(email)) {
      setEmailErrorMsg('Email must be a valid email')
      formInvalid = true
    } else {
      setEmailErrorMsg('')
    }

    if (!password) {
      setPasswordErrorMsg("Password can't be empty")
      formInvalid = true
    } else if (password.length < 8) {
      setPasswordErrorMsg(
        'Password must be greater than or equal to 8 characters'
      )
      formInvalid = true
    } else {
      setPasswordErrorMsg('')
    }

    if (formInvalid) {
      setDisableForm(false)
      return
    }

    if (authType === 'login') {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      })
      if (result?.error?.startsWith('No')) setEmailErrorMsg(result.error)
      if (result?.error?.startsWith('Invalid'))
        setPasswordErrorMsg(result.error)

      if (result?.ok) {
        setSuccessMessage(`Login successful`)
        setTimeout(() => router.replace('/thoughts'), 1000)
      }
    } else {
      await createUser(email!, password!)
    }
    setDisableForm(false)
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>
            {authType === 'login' ? 'Log in' : 'Sign up'} to your account
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={submitHandler}>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>

                <Input
                  type='email'
                  _focus={{
                    borderColor: 'purple.400',
                    boxShadow: '0 0 1px #6B46C1',
                  }}
                  ref={emailInputRef}
                />
                {emailErrorMsg && <Text color='red.500'>{emailErrorMsg} </Text>}
              </FormControl>

              <FormControl id='password' mt={6}>
                <FormLabel>Password</FormLabel>

                <Input
                  type='password'
                  _focus={{
                    borderColor: 'purple.400',
                    boxShadow: '0 0 1px #6B46C1',
                  }}
                  ref={passwordInputRef}
                />
                {passwordErrorMsg && (
                  <Text color='red.500'>{passwordErrorMsg} </Text>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Button
                  mt={6}
                  bg={'purple.600'}
                  color={'white'}
                  _hover={{
                    bg: 'purple.800',
                  }}
                  type='submit'
                  disabled={disableForm}
                >
                  {authType === 'login' ? 'Log in' : 'Sign up'}
                </Button>
                <Button
                  onClick={() =>
                    setAuthType(authType === 'login' ? 'signup' : 'login')
                  }
                  as={Link}
                  color='purple.500'
                  textAlign='center'
                  fontSize='1.1rem'
                  disabled={disableForm}
                >
                  Switch to {authType === 'login' ? 'Sign up' : 'Log in'}
                </Button>
              </Stack>
              {successMessage && (
                <Text color='green.400'>{successMessage}</Text>
              )}
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AuthCard
