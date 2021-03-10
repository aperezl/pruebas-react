import { ChakraProvider } from "@chakra-ui/react";

import Home from "./components/Home";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Form from "./components/Form";

function App() {
  return (
    <>
      <ChakraProvider>
        <ColorModeSwitcher />
        <Home />
        <hr />
        <Form />
      </ChakraProvider>
    </>
  );
}

export default App;
