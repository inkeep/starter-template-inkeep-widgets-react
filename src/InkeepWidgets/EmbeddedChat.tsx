import { InkeepEmbeddedChatWidget } from "@inkeep/inkeep-widget-library";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { Box } from "@chakra-ui/react";

const inkeepAiChatProps = {
  baseSettings: {
    ...inkeepBaseSettings,
    theme: {
      ...inkeepBaseSettings.theme,
      components: {
        AIChatPageWrapper: {
          defaultProps: {
            variant: "container-with-shadow", // add shadow to the chat widget
            size: "expand", // makes the chat widget expand to the full width and height of the container (that is position: relative)
          },
        },
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
      width={{
        base: "100%",
        md: "max(600px , 30vw)"
      }}
      maxHeight="100%"
      // width="max(760px , 30vw )"
      // maxHeight="900px"
    >
      <InkeepEmbeddedChatWidget {...inkeepAiChatProps} />
    </Box>
  );
};
