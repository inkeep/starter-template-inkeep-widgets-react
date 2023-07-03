import {
  InkeepFloatingButtonSettings,
  InkeepFloatingButton,
  InkeepFloatingButtonProps,
} from "@inkeep/widgets";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";

export const inkeepFloatingButtonMediumModalSettings: InkeepFloatingButtonSettings =
{
  isModalModeSwitchingEnabled: true,
  floatingButtonType: "ICON_TEXT", // 'ICON' | 'ICON_TEXT' | 'ICON_TEXT_SHORTCUT'
  defaultView: "AI_CHAT",
  closeOnBlur: true,
  isAlignedToTop: true,
  isAlignedToRight: false,
  areOpenHotKeysDisabled: true,
  isPositionFixed: false,
};

const inkeepFloatingButtonWidgetProps: InkeepFloatingButtonProps = {
  ...inkeepFloatingButtonMediumModalSettings,
  baseSettings: {
    ...inkeepBaseSettings,
  },
  aiChatSettings: {
    ...inkeepAIChatSettings,
  },
  searchSettings: {
    ...inkeepSearchSettings,
  },
};

export const FloatingButtonMedium = () => {
  return <InkeepFloatingButton {...inkeepFloatingButtonWidgetProps} />;
};
