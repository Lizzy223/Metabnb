import { Box, Grid, HStack, Image, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
      w="full"
      h={['100%', '322px']}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#1D1D1E"
      px={['2rem', '2rem']}
      py={['2rem', '0']}
    >
      <Grid
        gap={['6', '12']}
        templateColumns={[
          'repeat(1,1fr)',
          'repeat(2,1fr)',
          'repeat(2,1fr)',
          'repeat(4,1fr)',
        ]}
      >
        <VStack
          alignItems={['center', 'flex-start']}
          justifyContent="center"
          gap={['4', '12']}
        >
          <Image src="assets/Group.svg" boxSize={['50%', 'full']} alt="" />
          <HStack float="left" gap="8">
            <Image src="assets/fg.png" alt="" />
            <Image src="assets/ig.png" alt="" />
            <Image src="assets/tw.png" alt="" />
          </HStack>
          <Image src="assets/copy.png" alt="" />
          {/* <Text fontSize="18px" mb="1rem" fontWeight="700" color="#fff"></Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9"></Text> */}
        </VStack>
        <VStack
          justifyContent="center"
          alignItems={['center', 'flex-start !important']}
          gap="4"
        >
          <Text fontSize="18px" mb="1rem" fontWeight="700" color="#fff">
            Community
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            NFT
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Tokens
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Landlords
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Discord
          </Text>
        </VStack>
        <VStack
          justifyContent="center"
          alignItems={['center', 'flex-start !important']}
          gap="4"
        >
          <Text fontSize="18px" mb="1rem" fontWeight="700" color="#fff">
            Places
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Castle
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Farms
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Beach
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Learn more
          </Text>
        </VStack>
        <VStack
          justifyContent="center"
          alignItems={['center', 'flex-start !important']}
          gap="4"
        >
          <Text fontSize="18px" mb="1rem" fontWeight="700" color="#fff">
            About us
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Roadmap
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Creators
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Careers
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#F1F3F9">
            Contact us
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Footer