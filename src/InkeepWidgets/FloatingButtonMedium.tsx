import {
  InkeepChatButtonSettings,
  InkeepChatButtonProps,
  InkeepModalSettings,
  InkeepChatButton,
} from "@inkeep/widgets";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";


const inkeepChatButtonMediumSettings: InkeepChatButtonSettings = {
  chatButtonType: 'ICON_TEXT', // 'ICON' | 'ICON_TEXT' | 'ICON_TEXT_SHORTCUT'
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
  ...inkeepChatButtonMediumSettings,
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

export const FloatingButtonMedium = () => {
  return <InkeepChatButton {...inkeepFloatingButtonWidgetProps} />;
};
