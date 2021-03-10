import { ChakraProvider } from "@chakra-ui/react";

import Home from "./components/Home";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

function App() {
  return (
    <>
      <ChakraProvider>
        <ColorModeSwitcher />
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
