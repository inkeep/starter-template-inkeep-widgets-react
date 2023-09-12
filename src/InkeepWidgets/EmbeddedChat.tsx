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
        AIChatPageWrapper: {
          defaultProps: {
            size: {
              base: 'expand',
              md: 'expand',
            },
          },
        },
      },
    },
  },
  aiChatSettings: { ...inkeepAIChatSettings },
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
