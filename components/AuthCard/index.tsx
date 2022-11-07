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
  useColorModeValue,
} from '@chakra-ui/react'
import { SyntheticEvent, useRef, useState } from 'react'

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
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  async function submitHandler(evt: SyntheticEvent) {
    evt.preventDefault()
    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value
    if (authType === 'login') {
    } else {
      if (!email || !password) {
        return
      }
      await createUser(email, password)
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
