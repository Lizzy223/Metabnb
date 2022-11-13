import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Footer from './Components/Home/Footer';
import Place from './Pages/Place';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<Place />} />
        </Routes>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
