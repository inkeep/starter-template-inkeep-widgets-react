
import {
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    Image,
    Link
} from "@chakra-ui/react";
import HeadingText from "./HeadingText";
import { SearchBar } from "./InkeepWidgets/SearchBar";
import { FloatingButtonLarge } from "./InkeepWidgets/FloatingButtonLarge";
import { FloatingButtonMedium } from "./InkeepWidgets/FloatingButtonMedium";
import { FloatingButtonSmall } from "./InkeepWidgets/FloatingButtonSmall";
const graphqlUrl = 'https://api.inkeep.com/graphql';

export const RightSide = () => (
    <Flex
        // width="50vw"
        direction={"column"}
        alignSelf={"stretch"}
        paddingLeft={{
            base: "0",
            md: "12",
            xl: "32",
        }}
        paddingTop={{
            base: "20",
            md: "0",
        }}
        maxHeight="700px"
    // marginTop={48}
    >
        <Flex direction="column" justifyContent={"space-between"} flexGrow={5}>
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

        </Flex>
    </Flex>

);