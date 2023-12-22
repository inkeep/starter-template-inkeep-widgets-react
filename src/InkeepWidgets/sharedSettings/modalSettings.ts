import { InkeepModalSettings } from "@inkeep/widgets";

export const inkeepModalSettings: InkeepModalSettings = {
    // option to show chat or search by default
    // defaultView: 'AI_CHAT', // 'AI_CHAT' | 'SEARCH'

    // allow switching between search and chat in the modal
    // isModeSwitchingEnabled: true,

    // text for the button in the search bar. Default is 'Ask {botName}'.
    // switchToChatMessage: '',

     // text for the button in the top right of the chat that switches the modal to Search mode. Default Search.
    // switchToSearchMessage: '',

    // determines whether to animate the switch to chat button on first load, default is true.
    // shouldAnimateSwitchToChatButton: true,

    // Option to open the modal when a hotkey is pressed.
    // isShortcutEnabled: true,

    // Hotkey to open the modal.
    // openShortcutKey: 'k',

    // onShortcutKeyPressed: () => console.log('shortcut key pressed'), // only used for CustomTrigger component

    // alignment of the modal
    // isAlignedToTop: true,
    // isAlignedToRight: true,

    // if false we will not show an overlay and show a close button instead, elements behind the modal will be clickable
    // closeOnBlur: true,
}