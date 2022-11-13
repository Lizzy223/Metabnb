import { Box,Button,Input,Text, VStack, Image, InputGroup } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box
      display="flex"
      w="full"
      h={['100%', '100%', '100%', '100vh']}
      gap="6"
      mt="2rem"
      px={['1rem', '4rem']}
      py={['1rem', '2rem']}
      flexDirection={['column', 'row']}
    >
      <Box w={['full', '60%']}>
        <Text
          fontSize={['2rem', '2rem', '2rem', '56px']}
          fontWeight="400"
          lineHeight={['3rem', '3rem', '3rem', '78.4px']}
          color="#434343"
        >
          Rent a
          <Text
            as="span"
            fontSize={['2rem', '2rem', '2rem', '56px']}
            fontWeight="700"
            lineHeight={['3rem', '3rem', '3rem', '78.4px']}
            color="#A02279"
          >
            {' '}
            Place
          </Text>{' '}
          away from{' '}
          <Text
            as="span"
            fontSize={['2rem', '2rem', '2rem', '56px']}
            fontWeight="700"
            lineHeight={['3rem', '3rem', '3rem', '78.4px']}
            color="#A02279"
          >
            {' '}
            Home
          </Text>
          &nbsp; in the{' '}
          <Text
            as="span"
            fontSize={['2rem', '2rem', '2rem', '56px']}
            fontWeight="700"
            lineHeight={['3rem', '3rem', '3rem', '78.4px']}
            color="#A02279"
          >
            {' '}
            Metaverse
          </Text>
        </Text>
        <Text
          fontSize={['1rem', '1rem', '1rem', '24px']}
          fontWeight="400"
          lineHeight="35px"
          color="#434343"
          mt="1.5rem"
        >
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </Text>
        <InputGroup mt={['1rem', '3rem']}>
          <Input
            borderTopLeftRadius="8px"
            borderBottomLeftRadius="8px"
            borderTopRightRadius="0px"
            borderBottomRightRadius="0px"
            border="1px solid #A3A3A3"
            w="75%"
            fontSize="14px"
            placeholder="Search for location"
          />
          <Button
            bg="#A02279"
            color="#fff"
            w="230px"
            borderTopRightRadius="8px"
            borderBottomRightRadius="8px"
            fontWeight="400"
            fontSize="16px"
            borderTopLeftRadius="0px"
            borderBottomLeftRadius="0px"
          >
            Search{' '}
          </Button>
        </InputGroup>
      </Box>
      <Box display="flex" gap="3" w={['full', '40%']}>
        <VStack mt="5rem">
          <Image src="assets/image 4.png" alt="" />
          <Image src="assets/image 6.png" alt="" />
        </VStack>
        <VStack>
          <Image src="assets/image 3.png" alt="" />
          <Image src="assets/image 5.png" alt="" />
        </VStack>
      </Box>
    </Box>
  );
}

export default Header