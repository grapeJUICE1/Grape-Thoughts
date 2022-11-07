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
import { useState } from 'react'

function AuthCard() {
  type authType = 'login' | 'signup'
  const [authType, setAuthType] = useState<authType>('login')

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
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>

              <Input
                type='email'
                _focus={{
                  borderColor: 'purple.400',
                  boxShadow: '0 0 1px #6B46C1',
                }}
              />
            </FormControl>

            <FormControl id='password'>
              <FormLabel>Password</FormLabel>

              <Input
                type='password'
                _focus={{
                  borderColor: 'purple.400',
                  boxShadow: '0 0 1px #6B46C1',
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'purple.600'}
                color={'white'}
                _hover={{
                  bg: 'purple.800',
                }}
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
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AuthCard
