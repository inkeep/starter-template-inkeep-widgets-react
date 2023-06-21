import {
  InkeepFloatingButtonModalProps,
  InkeepFloatingButtonWidget,
  InkeepFloatingButtonWidgetProps,
} from "@inkeep/inkeep-widget-library";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";

export const inkeepFloatingButtonMediumModalSettings: InkeepFloatingButtonModalProps =
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

const inkeepFloatingButtonWidgetProps: InkeepFloatingButtonWidgetProps = {
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
  return <InkeepFloatingButtonWidget {...inkeepFloatingButtonWidgetProps} />;
};
