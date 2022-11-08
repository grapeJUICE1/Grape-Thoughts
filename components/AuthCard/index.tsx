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

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

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
    throw new Error(data.message || 'Something went wrong')
  }
}

function AuthCard() {
  type authType = 'login' | 'signup'
  const [authType, setAuthType] = useState<authType>('login')

  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  async function submitHandler(evt: SyntheticEvent) {
    evt.preventDefault()
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

    if (formInvalid) return

    if (authType === 'login') {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      })
      console.log(result)
    } else {
      await createUser(email!, password!)
    }
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
                >
                  {authType === 'login' ? 'Log in' : 'Sign up'}
                </Button>
                <Link
                  onClick={() =>
                    setAuthType(authType === 'login' ? 'signup' : 'login')
                  }
                  color='purple.500'
                  textAlign='center'
                  fontSize='1.1rem'
                >
                  Switch to {authType === 'login' ? 'Sign up' : 'Log in'}
                </Link>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AuthCard
