import { Box, Container, useColorMode } from "@chakra-ui/react";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Container centerContent marginTop="48">
      <Box
        w="200px"
        h="15vh"
        bg={colorMode === "light" ? "gray.500" : "gray.200"}
        boxShadow="md"
        rounded="lg"
      />
    </Container>
  );
};

export default Home;
