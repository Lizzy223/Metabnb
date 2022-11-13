import { Box, Text, VStack, Image, HStack, Grid } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'
import React from 'react'

const Card=({img})=>{
  // eslint-disable-next-line
  const [click, setClick] = React.useState(true);

  const toggle =()=>{
    setClick(!click)
  }

  return (
    <Box
      border="1px solid #D7D7D7"
      w="full"
      h="full"
      p=".75rem"
      borderRadius="15px"
    >
      <Image w="260px" h="265px" src={img} alt="" />
      <Box mt="1rem" justifyContent="space-between" display="flex">
        <VStack alignItems="flex-start" gap="3">
          <Text fontWeight="400" color="#434343" fontSize="12px">
            Desert king
          </Text>
          <Text fontWeight="400" color="#434343" fontSize="12px">
            2345km away
          </Text>
          <HStack fontWeight="400" color="#434343" fontSize="12px">
            <StarIcon color={click ? '#A02279' : '#ccc'} onClick={toggle} />
            <StarIcon color={click ? '#A02279' : '#ccc'} onClick={toggle} />
            <StarIcon color={click ? '#A02279' : '#ccc'} onClick={toggle} />
            <StarIcon color={click ? '#A02279' : '#ccc'} onClick={toggle} />
            <StarIcon color={click ? '#A02279' : '#ccc'} onClick={toggle} />
          </HStack>
        </VStack>
        <VStack alignItems="flex-end" gap="3">
          <Text fontWeight="700" color="#434343" fontSize="12px">
            1MBT per night
          </Text>
          <Text fontWeight="400" color="#434343" fontSize="12px">
            available for 2weeks stay
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

const Section = () => {
  return (
    <Box
      mt="3rem"
      display="flex"
      w="full"
      h="100%"
      p="1rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        textAlign="center"
        fontSize={['1.75rem', '48px']}
        fontWeight="700"
        color="#000"
      >
        Inspiration for your next adventure
      </Text>
      <Grid
        gap="4"
        mt="2rem"
        templateColumns={[
          'repeat(1,1fr)',
          'repeat(2,1fr)',
          'repeat(2,1fr)',
          'repeat(4,1fr)',
        ]}
      >
        <Card img="assets/Frame 151.png" />
        <Card img="assets/22.png" />
        <Card img="assets/33.png" />
        <Card img="assets/44.png" />
        <Card img="assets/55.png" />
        <Card img="assets/66.png" />
        <Card img="assets/77.png" />
        <Card img="assets/88.png" />
      </Grid>
    </Box>
  );
}

export default Section