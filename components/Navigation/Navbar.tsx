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

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.300', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            {' '}
            <Text fontWeight='bold'>Logo</Text>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                lel
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
