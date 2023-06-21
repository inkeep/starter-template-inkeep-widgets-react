import {
  InkeepFloatingButtonModalProps,
  InkeepFloatingButtonWidgetProps,
  InkeepFloatingButtonWidget,
} from "@inkeep/inkeep-widget-library";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";

export const inkeepFloatingButtonSmallModalSettings: InkeepFloatingButtonModalProps =
  {
    isModalModeSwitchingEnabled: true,
    floatingButtonType: "ICON", // 'ICON' | 'ICON_TEXT' | 'ICON_TEXT_SHORTCUT'
    defaultView: "AI_CHAT",
    closeOnBlur: true,
    isAlignedToTop: true,
    isAlignedToRight: false,
    areOpenHotKeysDisabled: true,
    isPositionFixed: false,
  };

const inkeepFloatingButtonWidgetProps: InkeepFloatingButtonWidgetProps = {
  ...inkeepFloatingButtonSmallModalSettings,
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

export const FloatingButtonSmall = () => {
  return <InkeepFloatingButtonWidget {...inkeepFloatingButtonWidgetProps} />;
};
