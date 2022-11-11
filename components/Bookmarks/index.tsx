import { Heading } from '@chakra-ui/react'
import Thoughts from '../Thoughts'

function Bookmarks({ thoughts }: any) {
  return (
    <>
      <Heading mt={10} textAlign='center'>
        All Bookmarks
      </Heading>
      <Thoughts thoughts={thoughts} areBookmarks={true} />
    </>
  )
}

export default Bookmarks
