import React from 'react'
import { HStack } from '@chakra-ui/react'
import Bookmark from '../../../icons/Bookmark'
import Heart from '../../../icons/Heart'

function ActionButtons({ likeFunc, count }: any) {
  return (
    <HStack pb='3' pt='3'>
      <Heart
        _hover={{ fill: 'red.500' }}
        _active={{ fill: 'red.200' }}
        _focus={{ fill: 'red.500' }}
        height='1.5rem'
        width='1.5rem'
        fill='none'
        stroke='red.500'
        onClick={likeFunc}
      />
      <p style={{ paddingRight: '1.5rem' }}>{count.likes}</p>
      <Bookmark
        _hover={{ fill: 'orange.400' }}
        _active={{ fill: 'orange.200' }}
        _focus={{ fill: 'red.700' }}
        height='1.5rem'
        width='1.5rem'
        fill='none'
        stroke='orange.400'
      />
      <p>Bookmark</p>
    </HStack>
  )
}

export default ActionButtons
