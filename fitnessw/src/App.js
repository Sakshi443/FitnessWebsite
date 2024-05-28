import * as React from 'react'
import Card from './Card.js'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      
      <Card />
    </ChakraProvider>
  );
}
export default App;