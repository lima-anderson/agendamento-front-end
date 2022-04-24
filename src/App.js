import { Box, Grid, HStack } from "@chakra-ui/react";
import { Menu } from "components/Menu";
import { Header } from "components/Header";
import { Content } from "components/Content";
import { Footer } from "components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <Box w="100%">
      <Header />
      <HStack>
        <Content />
      </HStack>
      <Footer />
    </Box>
  );
}

export default App;
