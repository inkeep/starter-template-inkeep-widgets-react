import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  VStack,
  Link,
  Image,
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
          justifyContent={"center"}
          direction={{
            base: "column",
            md: "row",
          }}
          flexGrow={5}
          maxHeight="940px" //max height of chat + heading of chat
        >
          <LeftSide></LeftSide>

          <RightSide></RightSide>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
