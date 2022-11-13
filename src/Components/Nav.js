import { Box, HStack, Image, Text, Stack, } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { GrClose } from 'react-icons/gr';
import Harmburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  
  // const openMobileMenu = () => {
  //   setIsOpened(!isOpened);
  // };

  const AddBgOnScroll = () => {
    const scrollHeight = 100;
    const pos = window.scrollY;

    if (pos >= scrollHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', AddBgOnScroll);
  }, []);

  const dropDown = useRef(null);



  return (
    <Box
      bgColor={navbar ? 'white' : 'white'}
      px={['1rem', '1rem', '1rem', '4rem']}
      py={['1rem', navbar ? '1rem' : '2rem']}
      w="full"
      fontFamily="Red Rose"
      ref={dropDown}
      boxShadow={navbar ? '0px 2px 8px rgba(74, 74, 104, 0.15)' : 'none'}
      transition={navbar ? '0.5s ease' : ''}
      pos="sticky"
      justify="space-between"
      align="center"
      top="0"
      color={navbar ? '#000' : '#000'}
      zIndex={5}
    >
      <Box display={['block', 'none']}>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Box mb=".5rem">
            <NavLink to="/">
              <Image alt="logo" boxSize="75%" src="assets/meta.png" />
            </NavLink>
          </Box>
          <Box
            display={['block', 'none']}
            zIndex={10}
            alignItems="flex-end"
            onClick={() => setIsOpened(prev => !prev)}
          >
            <Harmburger isOpened={isOpened} />
          </Box>
        </HStack>
      </Box>
      <Stack
        direction={['column', 'row']}
        pos={['fixed', 'unset']}
        bgColor={['white', 'unset']}
        width={['85%', 'full']}
        left={isOpened ? '0' : '-100%'}
        top="0"
        height={['100vh', 'auto']}
        alignItems={['center', 'center']}
        zIndex="3"
        transition={['all .5s ease', 'unset']}
        justifyContent={['center', 'space-between']}
        pl={['1rem', '0']}
        px={['none', '1rem']}
      >
        <NavLink to="/">
          <Image
            alt="logo"
            display={['', '']}
            src="/assets/meta.png"
            py={['1rem', 'none']}
          />
        </NavLink>
        <Stack
          m="auto"
          display="flex"
          alignItems={['center', 'center']}
          direction={['column', 'row']}
          gap={['2', '10']}
        >
          <NavLink to="">
            <Text
              _hover={{ textDecoration: 'none' }}
              textAlign={['center', 'none']}
              fontSize={['1rem', '.85rem', '.85rem', '20px']}
              color="#434343"
              fontWeight="400"
              _active={{ color: '#000' }}
            >
              Home
            </Text>
          </NavLink>
          <NavLink to="">
            <Text
              _hover={{ textDecoration: 'none' }}
              textAlign={['center', 'none']}
              fontSize={['1rem', '.85rem', '.85rem', '20px']}
              color="#434343"
              fontWeight="400"
              _active={{ color: '#000' }}
            >
              Place to stay
            </Text>
          </NavLink>
          <NavLink to="">
            <Text
              _hover={{ textDecoration: 'none' }}
              textAlign={['center', 'none']}
              fontSize={['1rem', '.85rem', '.85rem', '20px']}
              color="#434343"
              fontWeight="500"
              _active={{ color: '#000' }}
            >
              NFTs
            </Text>
          </NavLink>
          <NavLink to="">
            <Text
              _hover={{ textDecoration: 'none' }}
              textAlign={['center', 'none']}
              fontSize={['1rem', '.85rem', '.85rem', '20px']}
              color="#434343"
              fontWeight="500"
              _active={{ color: '#000' }}
            >
              Community
            </Text>
          </NavLink>
        </Stack>
        <Stack
          m="auto"
          display="flex"
          alignItems={['center', 'center']}
          direction={['column', 'row']}
          gap={['2', '10']}
        >
          <NavLink to="">
            <Text
              _hover={{ textDecoration: 'none' }}
              textAlign={['center', 'none']}
              fontSize={['1rem', '.75rem', '.75rem', '16px']}
              color="#fff"
              w={['170px', '150px', '100px', '170px']}
              h={['48px', '38px', '38px', '48px']}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
              fontWeight="400"
              borderRadius="10px"
              _active={{ color: '#000' }}
            >
              Connect Wallet
            </Text>
          </NavLink>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Nav;