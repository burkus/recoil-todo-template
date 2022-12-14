import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>
)
