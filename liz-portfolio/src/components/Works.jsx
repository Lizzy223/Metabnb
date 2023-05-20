import React from 'react'
import { Box,Image, Text } from '@chakra-ui/react'
import Buttons from '../common/Button'

const Works = () => {
  return (
    <Box bg='#02091B' w='full' h='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' p='3rem'>
        <Box>
            <Box display='flex' w='full' mb='1rem' alignItems='center' gap='6'>
                  <Image src='/briefcase.png'  alt=''/>
                <Text fontSize={['1.25rem','3rem']} whiteSpace='noWrap' color='#fff' fontWeight='700' fontFamily='satoshi'>Some Things I’ve Built</Text>
                <Image src='/Vector 1.png' h='100%' w='50%' alt=''/>
            </Box>
            <Text fontSize={['.8rem','1.25rem']} fontWeight='400' color='#fff' fontFamily='raleway' >Check out some of my featured projects.</Text>
        </Box>
        <Box mb='2rem' display='grid' gap='6' mt='4rem' gridTemplateColumns={['repeat(1,1fr)','repeat(2,1fr)']} >
            <Image src='/Card.png' w={['full','547px']} h={['full','460px']} overflow='hidden' transition='transform .5s ease' onhover={{transform:'scale(1.5)'}} alt=''/>
             <Image src='/Card.png'w={['full','547px']} h={['full','460px']} alt=''/>
              <Image src='/Card.png' w={['full','547px']} h={['full','460px']} alt=''/>
               <Image src='/Card.png' w={['full','547px']} h={['full','460px']} alt=''/>              
        </Box>
        <Buttons>ALL PROJECTS</Buttons>
    </Box>
  )
}

export default Works