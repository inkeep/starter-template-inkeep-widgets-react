import {
  type InkeepChatButtonSettings,
  type InkeepChatButtonProps,
  type InkeepModalSettings,
  InkeepChatButton,
} from "@inkeep/uikit";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";


const inkeepChatButtonSmallSettings: InkeepChatButtonSettings = {
  chatButtonType: 'ICON', // 'ICON' | 'PILL' | 'RECTANGLE_SHORTCUT'
  isPositionFixed: false,
};

const modalSettings: InkeepModalSettings = {
  isModeSwitchingEnabled: true,
  defaultView: 'AI_CHAT',
  closeOnBlur: true,
  isAlignedToTop: true,
  isAlignedToRight: false,
};


const inkeepFloatingButtonWidgetProps: InkeepChatButtonProps = {
  ...inkeepChatButtonSmallSettings,
  baseSettings: {
    ...inkeepBaseSettings,
  },
  aiChatSettings: {
    ...inkeepAIChatSettings,
  },
  searchSettings: {
    ...inkeepSearchSettings,
  },
  modalSettings: {
    ...modalSettings,
  },
};

export const FloatingButtonSmall = () => {
  return <InkeepChatButton {...inkeepFloatingButtonWidgetProps} />;
};
