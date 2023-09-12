
import {
    Flex,
    VStack,
} from "@chakra-ui/react";
import HeadingText from "./HeadingText";
import { EmbeddedChat } from "./InkeepWidgets/EmbeddedChat";

export const LeftSide = () => (
    <Flex
        justifyContent={{
            base: 'center',
            xl: 'end',
        }}
        alignSelf="stretch"
        boxSizing="border-box"
        flex={1}
        minWidth={{
            base: '100%',
            xl: 'max(55%, 400px)',
        }}
        minH={{
            base: 'min( 60vh, 600px )',
        }}
        h={{
            base: 'min( 80vh, 900px )',
        }}
    >
        <VStack
            alignSelf="stretch"
            alignItems="start"
            flexGrow={5}
            maxWidth="100%"
        >
            <Flex
                alignItems="center"
                justifyContent="space-between"
                direction="row"
                width="100%"
            >
                <HeadingText highlight={"chat widget"}>
                    ...an embedded chat widget
                </HeadingText>
            </Flex>
            <EmbeddedChat />
        </VStack>
    </Flex>
);