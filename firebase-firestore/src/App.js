import { Button, ChakraProvider, Container, Box, FormControl, FormLabel, Heading, Input, Flex } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        <Flex>
          <Box w="50%">
            <form>
              <Heading size="lg" paddingBottom="10" as="h1">User's form</Heading>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text"/>
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Telephone number</FormLabel>
                <Input type="text"/>
              </FormControl>
              <FormControl paddingY="4">
              <Button width="100%" colorScheme="blue">Register</Button>
              </FormControl>
            </form>
          </Box>
          <Box w="50%">
            ---
          </Box>
        </Flex>
      </Container>
      
    </ChakraProvider>
  );
}

export default App;
