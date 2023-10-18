import { InkeepEmbeddedChat, InkeepEmbeddedChatProps } from "@inkeep/widgets";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { Box } from "@chakra-ui/react";
import { inkeepShadowSettings } from "./sharedSettings/shadowSettings";

const InkeepEmbeddedChatSettings: InkeepEmbeddedChatProps = {
  ...inkeepShadowSettings,
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
      height={'100%'}
    >
      <InkeepEmbeddedChat {...InkeepEmbeddedChatSettings} />
    </Box>
  );
};
