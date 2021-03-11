import React, { useState } from 'react'
import { Button, ChakraProvider, Container, Box, FormControl, FormLabel, Heading, Input, Flex } from "@chakra-ui/react"

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [user, setUser] = useState([])
  const [error, setError] = useState(null)
  
  const setUsers = e => {
    console.log('comprobaciones')
    e.preventDefault()
    
    if (!name && !name.trim()) {
      setError('Field name is empty')
      return
    }
    if (!phone && !phone.trim()) {
      setError('Field phone is empty')
      return
    }



  }
  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        <Flex>
          <Box w="50%">
            <form onSubmit={setUsers}>
              <Heading size="lg" paddingBottom="10" as="h1">User's form</Heading>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input onChange={e => setName(e.target.value)} type="text"/>
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Telephone number</FormLabel>
                <Input onChange={e => setPhone(e.target.value)} type="text"/>
              </FormControl>
              <FormControl paddingY="4">
              <Button type="submit" width="100%" colorScheme="blue">Register</Button>
              </FormControl>
              { error ? (<div>{error}</div>) : (<span></span>) }
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
