import { Box, Center, Flex, HStack, Heading, VStack } from "@chakra-ui/react";
import { EmbeddedChat } from "./InkeepWidgets/EmbeddedChat";
import { SearchBar } from "./InkeepWidgets/SearchBar";
import { FloatingButtonLarge } from "./InkeepWidgets/FloatingButtonLarge";
import { FloatingButtonMedium } from "./InkeepWidgets/FloatingButtonMedium";
import { FloatingButtonSmall } from "./InkeepWidgets/FloatingButtonSmall";

function App() {
  return (
    <Box width="100vw" height="100vh">
      <Center height="10vh" alignItems={"end"}>
        <Heading as="h1" size="3xl">
          Incorporate into your product as...
        </Heading>
      </Center>
      <HStack
        width="100vw"
        height="90vh"
        alignItems={"start"}
        marginRight={128}
      >
        <Flex maxHeight="1000px" alignSelf="stretch">
          <Flex
            width="50vw"
            justifyContent="end"
            alignSelf={"stretch"}
            boxSizing="border-box"
          >
            <VStack alignSelf={"stretch"} alignItems={"start"}>
              <Box textAlign={"left"}>
                <Heading as="h2" size="xs">
                  ...an embedded chat widget
                </Heading>
              </Box>
              <EmbeddedChat />
            </VStack>
          </Flex>

          <Flex
            width="50vw"
            direction={"column"}
            alignItems={"start"}
            alignSelf={"stretch"}
            justifyContent={"center"}
            paddingLeft={124}
            // marginTop={48}
          >
            <VStack spacing={60} justifyContent={"start"}>
              <VStack alignItems={"start"}>
                <Heading as="h2" size="xs">
                  ... a search bar
                </Heading>

                <Box>
                  <SearchBar></SearchBar>
                </Box>
              </VStack>

              <VStack alignItems={"start"} alignSelf="stretch">
                <Heading as="h2" size="xs">
                  ... a floating chat button
                </Heading>

                <HStack
                  width="100%"
                  alignSelf="stretch"
                  justifyContent={"space-between"}
                >
                  <FloatingButtonSmall />
                  <FloatingButtonMedium />
                  <FloatingButtonLarge />
                </HStack>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </HStack>
    </Box>
  );
}

export default App;
