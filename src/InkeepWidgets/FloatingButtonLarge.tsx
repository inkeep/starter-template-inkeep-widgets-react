import {
  InkeepFloatingButtonModalProps,
  InkeepFloatingButtonWidget,
  InkeepFloatingButtonWidgetProps,
} from "@inkeep/inkeep-widget-library";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";

const inkeepFloatingButtonLargeModalSettings: InkeepFloatingButtonModalProps = {
  isModalModeSwitchingEnabled: true,
  floatingButtonType: "ICON_TEXT_SHORTCUT", // 'ICON' | 'ICON_TEXT' | 'ICON_TEXT_SHORTCUT'
  defaultView: "AI_CHAT",
  closeOnBlur: true,
  isAlignedToTop: true,
  isAlignedToRight: false,
  areOpenHotKeysDisabled: false,
  openShortcutKey: "k",
  isPositionFixed: false,
};

const inkeepFloatingButtonWidgetProps: InkeepFloatingButtonWidgetProps = {
  ...inkeepFloatingButtonLargeModalSettings,
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

export const FloatingButtonLarge = () => {
  return <InkeepFloatingButtonWidget {...inkeepFloatingButtonWidgetProps} />;
};
