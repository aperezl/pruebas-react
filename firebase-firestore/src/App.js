import React, { useState, useEffect } from 'react'
import { Button, ChakraProvider, Container, Box, FormControl, FormLabel, Heading, Input, Flex, UnorderedList, ListItem } from "@chakra-ui/react"
import { Store } from './firebase.config'

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(null)
  const [userList, setUserList] = useState([])
  
  const setUsers = async e => {
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

    try {
      const user = {name, phone}
      const data = await Store.collection('contacts').add(user)
      console.log('user added', data)
      setName('')
      setPhone('')
      setError('')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      const { docs } = await Store.collection('contacts').get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setUserList(newArray)
    } 
    getUsers()
  }, [])
  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        <Flex>
          <Box w="50%">
            <form onSubmit={setUsers}>
              <Heading size="lg" paddingBottom="10" as="h1">User's form</Heading>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input value={name} onChange={e => setName(e.target.value)} type="text"/>
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Telephone number</FormLabel>
                <Input value={phone} onChange={e => setPhone(e.target.value)} type="text"/>
              </FormControl>
              <FormControl paddingY="4">
              <Button type="submit" width="100%" colorScheme="blue">Register</Button>
              </FormControl>
              { error ? (<div>{error}</div>) : (<span></span>) }
            </form>
          </Box>
          <Box w="50%">
            <Heading size="lg" paddingBottom="10" as="h1">User's list</Heading>
            <UnorderedList>
              {
                userList.length !== 0 ?
                (
                  userList.map(item => (
                    <ListItem id={item.id} key={item.id}>{item.name} - {item.phone}</ListItem>
                  ))
                )
                :
                (
                  <span>No users found</span>
                )
              }
            </UnorderedList>
          </Box>
        </Flex>
      </Container>
      
    </ChakraProvider>
  );
}

export default App;
