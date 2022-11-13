import { Box, Grid, Text,VStack,HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { StarIcon } from '@chakra-ui/icons';

const Card = ({ img }) => {
  // eslint-disable-next-line
  const [click, setClick] = React.useState(true);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <Box
      border="1px solid #D7D7D7"
      w="full"
      h="full"
      p=".75rem"
      borderRadius="15px"
    >
      <Image w={['full',"260px"]} h={['260px',"265px"]} src={img} alt="" />
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
};

const Place = () => {
  return (
    <Box px={['1rem',"4rem"]}>
      <Box w="full" mb="2rem" gap='2' justifyContent="space-between" flexDirection={['column','row']} display="flex">
        <Grid
          gap={['2',"5"]}
          float="left"
          templateColumns={['repeat(2,1fr)', 'repeat(8,1fr)']}
        >
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Resturant
          </Text>
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Cottage
          </Text>
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Castle
          </Text>
          <Text fontSize="20px" color="#434343" fontWeight="400">
            fantast city
          </Text>
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Beach
          </Text>
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Carbins
          </Text>
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Off-grid
          </Text>
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Farm
          </Text>
        </Grid>
        <Box
          display="flex"
          border="1px solid #B4B4B4"
          borderRadius="8px"
          px=".75rem"
          py=".25rem"
          gap="5"
          justifyContent=""
          float="right"
        >
          <Text fontSize="20px" color="#434343" fontWeight="400">
            Location
          </Text>
          <Image src="assets/setting.svg" alt="" />
        </Box>
      </Box>
      <Grid
        gap={['2',"4"]}
        mt="2rem"
        templateColumns={[
          'repeat(1,1fr)',
          'repeat(2,1fr)',
          'repeat(2,1fr)',
          'repeat(4,1fr)',
        ]}
        mb='1.5rem'
      >
        <Card img="assets/a1.png" />
        <Card img="assets/a2.png" />
        <Card img="assets/a3.png" />
        <Card img="assets/a4.png" />
        <Card img="assets/a5.png" />
        <Card img="assets/a6.png" />
        <Card img="assets/a7.png" />
        <Card img="assets/a8.png" />
        <Card img="assets/a9.png" />
        <Card img="assets/a10.png" />
        <Card img="assets/a11.png" />
        <Card img="assets/a12.png" />
        <Card img="assets/a13.png" />
        <Card img="assets/a14.png" />
        <Card img="assets/a15.png" />
        <Card img="assets/a15.png" />
      </Grid>
    </Box>
  );
}

export default Place