
import {
    Box,
    Flex,
    VStack,
} from "@chakra-ui/react";
import HeadingText from "./HeadingText";
import { EmbeddedChat } from "./InkeepWidgets/EmbeddedChat";

export const LeftSide = () => (
    <Flex
        justifyContent={{
            base: "center",
            md: "end"
        }}
        alignSelf={"stretch"}
        boxSizing="border-box"
    >
        <VStack alignSelf={"stretch"} alignItems={"start"} flexGrow={5} maxWidth={"900px"}>
            <Box textAlign={"left"}>
                <HeadingText highlight={"chat widget"}>
                    ...an embedded chat widget
                </HeadingText>
            </Box>
            <EmbeddedChat />
        </VStack>
    </Flex>);