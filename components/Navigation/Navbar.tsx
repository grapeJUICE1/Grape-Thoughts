import {
  useColorMode,
  useColorModeValue,
  Box,
  Flex,
  Button,
  Text,
  Stack,
  IconButton,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.300', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            {' '}
            <Text fontWeight='bold' pl={3}>
              <Link href='/'>GrapeThoughts </Link>
            </Text>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} pr={5}>
              <Button
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Link href='/auth'>Login/Signup</Link>
              </Button>
              <IconButton
                aria-label='darkModeToggle'
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                isRound={true}
                onClick={toggleColorMode}
              ></IconButton>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar