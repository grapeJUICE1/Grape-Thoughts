import { Heading } from '@chakra-ui/react'
import Thoughts from '../Thoughts'

function Bookmarks() {
  return (
    <>
      <Heading mt={10} textAlign='center'>
        All Bookmarks
      </Heading>
      <Thoughts />
    </>
  )
}

export default Bookmarks
