import {
  InkeepChatButtonSettings,
  InkeepChatButtonProps,
  InkeepModalSettings,
  InkeepChatButton,
} from "@inkeep/widgets";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";


const inkeepChatButtonLargeSettings: InkeepChatButtonSettings = {
  chatButtonType: 'ICON_TEXT_SHORTCUT',  // 'ICON' | 'ICON_TEXT' | 'ICON_TEXT_SHORTCUT'
  isPositionFixed: false,
  // fixedPositionXOffset: '48px',
  // fixedPositionYOffset: '48px',
};

const modalSettings: InkeepModalSettings = {
  isModeSwitchingEnabled: true,
  defaultView: 'AI_CHAT',
  closeOnBlur: true,
  isAlignedToTop: true,
  isAlignedToRight: false,
  isShortcutKeyEnabled: true,
  openShortcutKey: 'k',
};

const inkeepFloatingButtonWidgetProps: InkeepChatButtonProps = {
  ...inkeepChatButtonLargeSettings,
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

export const FloatingButtonLarge = () => {
  return <InkeepChatButton {...inkeepFloatingButtonWidgetProps} />;
};
