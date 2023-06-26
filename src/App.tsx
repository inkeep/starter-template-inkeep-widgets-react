import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  VStack,
  Text,
  Link,
  Image,
  Container,
  ChakraProvider,
  Highlight,
} from "@chakra-ui/react";
import { EmbeddedChat } from "./InkeepWidgets/EmbeddedChat";
import { SearchBar } from "./InkeepWidgets/SearchBar";
import { FloatingButtonLarge } from "./InkeepWidgets/FloatingButtonLarge";
import { FloatingButtonMedium } from "./InkeepWidgets/FloatingButtonMedium";
import { FloatingButtonSmall } from "./InkeepWidgets/FloatingButtonSmall";
import HeadingText from "./HeadingText";

const graphqlUrl = 'https://api.inkeep.com/graphql';

function App() {
  return (
    <ChakraProvider>
    <Container maxWidth="8xl" maxHeight="100vh">
      <Center height="10vh" alignItems={"end"}>
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
          justifyContent={"space-between"}
          direction={{
            base: "column",
            md: "row",
          }}
          maxH={'calc(90vh - 3rem)'}
          py={6}
        >
          <Flex
            // width="50vw"
            justifyContent={{
              base: "center",
              md: "end"
            }}
            alignSelf={"stretch"}
            boxSizing="border-box"
          >
            <VStack alignSelf={"stretch"} alignItems={"start"}>
              <Box textAlign={"left"}>
                <HeadingText highlight={"chat widget"}>
                  ...an embedded chat widget
                </HeadingText>
              </Box>
              <EmbeddedChat />
            </VStack>
          </Flex>

          <Flex
            // width="50vw"
            direction={"column"}
            alignItems={"start"}
            alignSelf={"stretch"}
            justifyContent={"center"}
            paddingLeft={{
              base: "0",
              md: "12",
              xl: "32",
            }}
            paddingTop={{
              base: "20",
              md: "0",
            }}
            // marginTop={48}
          >
            <VStack spacing={20} justifyContent={"start"}>
              <VStack
                alignItems="start"
                alignSelf="stretch"
                width="100%"
              >
                <HeadingText highlight={"search bar"}>
                  ... a search bar
                </HeadingText>

                <Box width="100%">
                  <SearchBar></SearchBar>
                </Box>
              </VStack>

              <VStack alignItems={"start"} alignSelf="stretch">
                <HeadingText highlight={"chat button"}>
                  ... a floating chat button
                </HeadingText>

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

              <VStack alignItems={"start"} alignSelf="stretch">
                <HeadingText highlight={"own experience"}>
                  ... your own experience
                </HeadingText>
                <Text color="gray.700">
                      Use our
                      {' '}
                      <Link
                        href={graphqlUrl}
                        variant="inlineTextLink"
                        isExternal
                        color='#0F81FC' // todo
                        fontWeight='medium'
                        textDecoration='none'
                        _hover={{
                          textDecoration: 'none',
                          borderBottom: '1px solid',
                        }}
                      >
                        chat APIs
                      </Link>
                      {' '}
                      to build your own UX or our
                      {' '}
                      <Link
                        href={graphqlUrl}
                        variant="inlineTextLink"
                        isExternal
                        color='#0F81FC' // todo
                        fontWeight='medium'
                        textDecoration='none'
                        _hover={{
                          textDecoration: 'none',
                          borderBottom: '1px solid',
                        }}
                      >
                        search APIs
                      </Link>
                      {' '}
                      to power your LLM-app.
                    </Text>
              </VStack>

              <VStack alignItems={"start"} alignSelf="stretch">
                <HeadingText highlight={['discord', 'slack bot']}>
                  ... a discord or slack bot
                </HeadingText>
                <Image
                      src={'chat_image.svg'}
                      alt="chat bot image"
                    />
              </VStack>

            </VStack>
          </Flex>
        </Flex>
    </Container>
    </ChakraProvider>
  );
}

export default App;
