
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

const graphqlUrl = 'https://docs.inkeep.com/inkeep-api/using-the-graphql-playground';


export const RightSide = () => (
    <Flex
        direction="column"
        alignSelf="stretch"
        paddingLeft={{
            base: 0,
            xl: 32,
        }}
        paddingTop={{
            base: 16,
            xl: 0,
        }}
        maxHeight="700px"
    >
        <Flex
            direction="column"
            justifyContent="space-between"
            flexGrow={5}
            maxWidth={{
                base: '800px',
            }}
            alignSelf="center"
            width="100%"
        >

            <VStack
                alignItems="start"
                alignSelf="stretch"
                mb={{
                    base: 16,
                }}
            >
                <HeadingText highlight={"chat button"}>
                    ... a chat button
                </HeadingText>
                <HStack
                    width="100%"
                    alignSelf="stretch"
                    justifyContent="space-between"
                >
                    <FloatingButtonSmall />
                    <FloatingButtonMedium />
                    <FloatingButtonLarge />
                </HStack>

            </VStack>

            <VStack
                alignItems="start"
                alignSelf="stretch"
                width="100%"
                mb={{
                    base: 16,
                }}
            >
                <HeadingText highlight={"search bar"}>
                    ... a search bar
                </HeadingText>
                <Box
                    width="100%"
                    height={12}
                >
                    <SearchBar
                    />
                </Box>
            </VStack>

            <VStack
                alignItems="start"
                alignSelf="stretch"
                mb={{
                    base: 16,
                }}
            >
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
                        color='#0F81FC'
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

            <VStack
                alignItems="start"
                alignSelf="stretch"
            >
                <HeadingText highlight={['discord', 'slack bot']}>
                    ... a discord or slack bot
                </HeadingText>
                <Image
                    src={'/chat_image.svg'}
                    alt="chat bot image"
                />
            </VStack>
        </Flex>
    </Flex>
);