import { InkeepEmbeddedChat } from "@inkeep/widgets";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { Box } from "@chakra-ui/react";

const InkeepAIChatSettings = {
  baseSettings: {
    ...inkeepBaseSettings,
    theme: {
      ...inkeepBaseSettings.theme,
      components: {
        // AIChatPageWrapper: {
        //   defaultProps: {
        //     variant: "container-with-shadow", // add shadow to the chat widget
        //     size: "expand", // makes the chat widget expand to the full width and height of the container (that is position: relative)
        //   },
        // },
      },
    },
  },
  ...inkeepAIChatSettings,
};

export const EmbeddedChat = () => {
  return (
    <Box
      position="relative"
      flexGrow={5}
      alignSelf={"stretch"}
      maxHeight={"800px"}
    >
      <InkeepEmbeddedChat {...InkeepAIChatSettings} />
    </Box>
  );
};
