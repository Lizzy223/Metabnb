import {
  Box,
  Text,
  Image,
  HStack,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function AddWallet() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        onClick={onOpen}
        _hover={{ textDecoration: 'none' }}
        textAlign={['center', 'none']}
        fontSize={['1rem', '.75rem', '.75rem', '16px']}
        color="#fff"
        w={['170px', '150px', '100px', '170px']}
        h={['48px', '38px', '38px', '48px']}
        display="flex"
        alignItems="center"
        cursor="pointer"
        justifyContent="center"
        bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
        fontWeight="400"
        borderRadius="10px"
        _active={{ color: '#000' }}
      >
        Connect Wallet
      </Text>

      <Modal
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg="rgba(64, 64, 64, 0.3)" />
        <ModalContent>
          <ModalHeader borderBottom="1px solid #E4ECF7">
            Connect Wallet
          </ModalHeader>
          {/* <Image src="/assets/close-square.png" alt="" /> */}
          <ModalCloseButton color="#425D8A" borderRadius="8px" />
          <ModalBody>
            <Box
              mt="1rem"
              p="1rem"
              display="flex"
              flexDirection="column"
              gap="3"
            >
              <Text fontSize="16px" fontWeight="400" color="#333">
                Choose your preferred wallet:
              </Text>
              <VStack gap='3' alignItems="flex-start">
                <Box
                  w="full"
                  p="1rem"
                  border="1px solid #CFD8DC"
                  borderRadius="12px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <HStack float="left">
                    <Image src="assets/image 66.png" alt="" />
                    <Text fontSize="18px" fontWeight="600">
                      Metamask
                    </Text>
                  </HStack>
                  <Box float="right">
                    <Image src="assets/Down.png" alt="" />
                  </Box>
                </Box>
                <Box
                  w="full"
                  p="1rem"
                  border="1px solid #CFD8DC"
                  borderRadius="12px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <HStack float="left">
                    <Image src="assets/image 69.png" alt="" />
                    <Text fontSize="18px" fontWeight="600">
                      WalletConnect
                    </Text>
                  </HStack>
                  <Box float="right">
                    <Image src="assets/Down.png" alt="" />
                  </Box>
                </Box>
              </VStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddWallet;
