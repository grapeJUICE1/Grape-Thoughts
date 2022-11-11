import {
  Button,
  Center,
  Flex,
  Heading,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Pagination from '@choc-ui/paginator'
import useSWR from 'swr'
import SubmitThoughtModal from '../SubmitThoughtModal'
import Thought from './Thought'

const fetcher = (url: string) => fetch(url).then((r) => r.json())
function Thoughts({
  thoughts,
  count,
  type
}: {
  thoughts:
    | {
        id: string
        content: string
        likes?: { id: string }[]
        bookmarks?: { id: string }[]
        _count: { likes: number; bookmarks: number }
      }[]
    | {
        thought: {
          id: string
          content: string
          likes?: { id: string }[]
          bookmarks?: { id: string }[]
          _count: { likes: number; bookmarks: number }
        }
      }[]
    | undefined,
  type:'thoughts'|'userThoughts'|'bookmarks'
  count: number,

}) {
  const [getPage, setGetPage] = useState(false)
  const [page, setPage] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [renderedThoughts, setRenderedThoughts] = useState(()=>thoughts)
  const toast = useToast()

  const { data: response, error } = useSWR(() => {
    if (getPage) {
      toast.closeAll()
      toast({ description: 'Please wait for a few seconds',isClosable:true ,duration: null })
      if(type==='userThoughts')return`/api/thoughts/me?page=${page-1}`
      else if(type==='bookmarks') return `/api/bookmark/?page=${page-1}`
      else return`/api/thoughts?page=${page - 1}`
    }
    return null
  }, fetcher)

  if(error){
    toast.closeAll()
    toast({description:'Something went wrong'})
    console.log(error)
    setGetPage(false)
  }
  if (response) {
    if (response.data.thoughts) {
      toast.closeAll()
      toast({ description: 'Fetched data', status: 'success', duration: 1000 })
      setRenderedThoughts(response.data.thoughts)
    }
    setGetPage(false)
  }

  return (
    <>
        <Heading mt={10} textAlign='center'>
      {
        type==='thoughts'?
          'All Thoughts': 
              type === 'userThoughts'? 
                'Your Thoughts': 'Your Bookmarks'


      }
        </Heading>
      {type==='thoughts' ? (
        <Center mt={10}>
          <Button color='purple.500' onClick={onOpen} alignItems='center'>
            Submit Thought
          </Button>
        </Center>
      ) : (
        ''
      )}
      <SubmitThoughtModal isOpen={isOpen} onClose={onClose} />
      <VStack mt={10}>
        {
          renderedThoughts?.map((thought: any) => (
              <Thought
                //@ts-ignore
                key={type==='bookmarks' ? thought.thought.id! : thought.id}
                //@ts-ignore
                initialThought={type==='bookmarks' ? thought.thought : thought}
                individual={false}
              />
            ))}
      </VStack>
      <Flex w='full' p={50} alignItems='center' justifyContent='center'>
        <Pagination
          defaultCurrent={1}
          current={page}
          total={count}
          pageSize={10}
          paginationProps={{
            display: 'flex',
          }}
          colorScheme='purple'
          rounded='full'
          onChange={(page) => {
            setPage(page as number)
            setGetPage(true)
          }}
        />
      </Flex>
    </>
  )
}

export default Thoughts
