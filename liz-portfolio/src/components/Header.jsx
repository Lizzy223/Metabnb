import React from 'react'
import {Box, Text, } from '@chakra-ui/react'
import Image from 'next/image'
import Typed from "react-typed"
import Buttons from '../common/Button'


const Header = () => {
  return (
    <Box w='full' h={['100%','75vh']} gap='12' p={['1rem','2rem']} bg='#02091B' color='#fff' display='flex' flexDirection={['column','row']} justifyContent='space-between' alignItems='center' >
            
        <Box w={['full','50%']} p={['0','2rem']} mt={['1rem','']} display='flex' flexDirection='column' gap='6' >
            <Text fontSize='20px' fontFamily='raleway' color='#F2F2F4' fontWeight='400'>
HEY THERE
            </Text>
            <Text fontSize={['2rem','56px']} fontFamily='satoshi' whiteSpace='nowrap' fontWeight='900'>👋 I’m Lizzie.</Text>
            <Text  fontSize={['.8rem','20px']} fontFamily='raleway' color='#F2F2F4' fontWeight='400'>
                <Typed
                strings={[
                        "I’m a front-end developer specialized in building exceptional digital experiences.",
                        "Specialized in building exceptional digital experiences.",
                        "Self-taught frontend developer passionate about programming with comprehensive experience in working on projects and delivers tasks on time.",
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                    />
               </Text>
            <Buttons>Let's Talk</Buttons>
            
        </Box>
        <Box w={['full','50%']} float='right'>
            <Image src='/7922058 1 (1).png' height={458} width={458}  alt='' />
        </Box>
    </Box>
  )
}

export default Header