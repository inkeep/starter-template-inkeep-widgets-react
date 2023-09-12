import {
  Box,
  Center,
  Flex,
  Heading,
  Container,
  ChakraProvider,
  Highlight,
} from "@chakra-ui/react";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

function App() {
  return (
    <ChakraProvider>
      <Flex minHeight="100vh" maxWidth="100vw" direction="column" px={12} paddingBottom={12} >
        <Container
          maxW="container.xl"
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="center"
          minHeight="90vh"
        >
          <Box w="100%">
            <Center height="10vh" alignItems={"end"} mb={16}>
              <Heading as="h1" size="2xl">
                <Highlight
                  query="incorporate"
                  styles={{
                    bgGradient: 'linear(to-r, #26D6FF 30%, #0F81FC 85%)',
                    bgClip: 'text',
                    textFillColor: 'transparent',
                    px: '0.06em',
                  }}
                >
                  Incorporate into your product as...
                </Highlight>
              </Heading>
            </Center>
            <Flex
              alignSelf="stretch"
              justifyContent="center"
              direction={{
                base: 'column',
                xl: 'row',
              }}
              flexGrow={5}
              maxHeight={{
                xl: '900px',
              }}
              maxW={{
                lg: '800px',
                xl: '100%',
              }}
              margin="0 auto"
            >
              <LeftSide />
              <RightSide />
            </Flex>
          </Box>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
