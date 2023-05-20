import React from 'react'
import { Button } from '@chakra-ui/react'

const Buttons = ({children}) => {
  return (
    <Button color='#fff' w={['75%','35%']} mt='1rem' bg='transparent' border='1px solid #fff' borderRadius='1rem' >{children} &#8725;&gt; </Button>
  )
}

export default Buttons