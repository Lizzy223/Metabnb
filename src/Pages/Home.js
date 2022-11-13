import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Cta from '../Components/Home/Cta';
import Header from '../Components/Home/Header'
import Section from '../Components/Home/Section';

const Home = () => {
  return (
    <Box>
      <Header />
      <Box
        display="flex"
        alignItems="center"
        gap="6"
        flexDirection={['column', 'row']}
        px={['2rem', '6rem']}
        py="1rem"
        bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
        justifyContent="space-between"
      >
        <Image
          boxSize={['50%', '50%', '50%', '20%']}
          src="assets/token.svg"
          alt=""
        />
        <Image
          boxSize={['50%', '50%', '50%', '20%']}
          src="assets/metamask.svg"
          alt=""
        />
        <Image
          boxSize={['50%', '50%', '50%', '20%']}
          src="assets/opensea.svg"
          alt=""
        />
      </Box>
      <Section />
      <Cta/>
    </Box>
  );
}

export default Home