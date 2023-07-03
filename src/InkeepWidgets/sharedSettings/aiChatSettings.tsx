import { InkeepAIChatSettings } from "@inkeep/widgets";

export const inkeepAIChatSettings: InkeepAIChatSettings = {
  // Optional placeholder for chat input. Default is 'How do I get started?'.
  // placeholder: 'How do I get started?',

  // Optional introductory message. Should be in markdown.
  // introMessage: '',

  // Whether to enable disclaimer. Default is true.
  // isDisclaimerEnabled: true,

  // Label for the disclaimer. Default is 'Usage policy'.
  // disclaimerLabel: 'Usage policy',

  // Tooltip for the disclaimer.
  // disclaimerTooltip: '',

  // Determines whether the message will be controlled externally. Default is false.
  // isControlledMessage: false,

  // Callback when the input message changes.
  // handleMessageChange: undefined,

  // Ref to the AIChat component's callable functions.
  // chatCallableFunctionsRef: undefined,

  // Name of the bot. Default is 'Keepie'.
  // botName: 'Keepie',

  // Text for the button in the search bar. Default is 'Ask {botName}'.
  // switchToChatMessage: '',

  // Source URL for the bot's avatar.
  // botAvatarSrcUrl: '',

  // Source URL for the user's avatar.
  // userAvatarSrcUrl: '',

  // Determines if chat sharing is enabled. Default is false.
  // isChatSharingEnabled: false,

  // Base path for shared chats, e.g., 'https://portal.inkeep.com/chats/'.
  // shareChatUrlBasePath: '',

  // Default chat mode. Can be 'TURBO' or 'AUTO'. Default is 'TURBO'.
  // defaultChatMode: 'TURBO',

  // Determines if chat mode toggle is enabled. Default is false. Uncomment the line below to make it true.
  isChatModeToggleEnabled: true,

  // Label for turbo mode toggle when default is 'AUTO'. Default is 'Turbo mode'.
  // turboModeLabel: 'Turbo mode',

  // Tooltip for turbo mode toggle when default is 'AUTO'.
  // turboModeTooltip: 'Turbo mode is fast and effective for less complex questions.',

  // Label for turbo mode toggle when default is 'TURBO'. Default is 'Einstein mode'.
  // einsteinModeLabel: 'Einstein mode',

  // Tooltip for turbo mode toggle when default is 'TURBO'. Default is 'Einstein mode is great for complex questions, but can be slower.'
  // einsteinModeTooltip: 'Einstein mode is great for complex questions, but can be slower.',

  // Determines whether links should open in a new tab. Default is true.
  // shouldOpenLinksInNewTab: true,
};
