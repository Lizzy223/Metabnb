import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box >
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
