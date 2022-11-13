import { Box, Button , Image, Text} from '@chakra-ui/react'
import React from 'react'

const Cta = () => {
  return (
    <Box
      display="flex"
      bg="#A02279"
      w="full"
      flexDirection={["column",'row']}
      alignItems="center"
      justifyContent="center"
      h={['100%', '100vh']}
    >
      <Box
        w={['full', '50%']}
        display="flex"
        gap="10"
        alignItems="flex-start"
        flexDirection="column"
        p={['1rem', '2rem']}
      >
        <Text fontSize="48px" color="#fff" fontWeight="700">
          Metabnb NFTs
        </Text>
        <Text fontSize="18px" color="#fff" fontWeight="400">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </Text>
        <Button
          fontSize="16px"
          w={['full','50%','50%', '25%']}
          color="#A02279"
          bg="#fff"
          fontWeight="400"
        >
          Learn more
        </Button>
      </Box>
      <Box
        w={['full', '50%']}
        display={["flex"]}
        gap="10"
        alignItems="flex-start"
        flexDirection="column"
        p={['1rem', '2rem']}
      >
        <Image src="assets/trio.png" alt="" />
      </Box>
    </Box>
  );
}

export default Cta