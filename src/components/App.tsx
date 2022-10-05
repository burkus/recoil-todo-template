import { Flex, Heading, Image, Container } from '@chakra-ui/react'
import { AppContainer, RoundedImage } from './App.styles'

const App = () => {
  return (
    <div>
      <Heading padding={5} paddingLeft={10}>Memetic UI</Heading>
      <Flex justify='center' w='full' padding={5}>
        <Container>
          <Heading>
            <Image borderRadius={10} src='https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?width=1200&rect=680x453&offset=0x30' />
          </Heading>
        </Container>
        <Container>
          <Image borderRadius={10} src='https://pbs.twimg.com/media/FX1JhFEUEAEl30v.jpg:large' />
        </Container>
        <Container>
          <Heading>
            Search
          </Heading>
          Couldn't find a meme for this one
        </Container>
      </Flex>
    </div>
  )
}

export default App
