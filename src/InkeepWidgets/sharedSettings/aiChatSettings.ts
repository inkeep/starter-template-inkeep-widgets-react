import type { InkeepAIChatSettings } from "@inkeep/uikit";

export const inkeepAIChatSettings: InkeepAIChatSettings = {
  // Optional placeholder for chat input. Default is 'How do I get started?'.
  // placeholder: 'How do I get started?',

  // Optional introductory message. Should be in markdown.
  // introMessage: '',

  // name of what the chat is about, e.g. "Inkeep". Defaults to the organizationDisplayName if not provided.
  // chatSubjectName: 'Inkeep',

  // Name of the bot. Default is 'Keepie'.
  // botName: 'Keepie',

  // Source URL for the bot's avatar.
  // botAvatarSrcUrl: '',

  // Source URL for the bot's avatar in darkmode.
  // botAvatarDarkSrcUrl: '',

  // Source URL for the user's avatar.
  // userAvatarSrcUrl: '',

  // Determines whether links should open in a new tab. Default is true.
  // shouldOpenLinksInNewTab: true,

  // header for suggested queries
  // quickQuestionsLabel: 'FAQs', // default is 'Example Questions'

  // suggested queries user can auto-submit
  // quickQuestions: ['How to get started?'],

  // if true, the first quick question will be highlighted
  // shouldHighlightFirstQuickQuestion: true, // default is false

  // Determines if chat sharing is enabled. Default is false.
  // isChatSharingEnabled: false, // only set to true if you've implemented the below.

  // Base path for shared chats, e.g., 'https://portal.inkeep.com/chats/'. Should be the path to wherever you have dedicated pages for each chat.
  // shareChatUrlBasePath: '',

  // isViewOnly: false // if true, the chat will be read-only. Default is false.

  // Default chat mode. Can be 'TURBO' or 'AUTO'. Default is 'TURBO'.
  // defaultChatMode: 'TURBO',

  // Determines if chat mode toggle is enabled. Default is false. Uncomment the line below to make it true.
  toggleButtonSettings: {
    isChatModeToggleEnabled: true,
    // chatModeToggleValue: 'AUTO', // 'TURBO' | 'AUTO'
    // chatModeToggleLabel: 'Turbo mode',
    // chatModeToggleTooltip: 'Turbo mode is fast and effective for less complex questions.',
  },

  // disclaimerSettings: {
  //   // Whether to enable disclaimer. Default is true.
  //   isDisclaimerEnabled: true,
  //   // Label for the disclaimer. Default is 'Usage policy'.
  //   disclaimerLabel: 'Usage policy',
  //     // Tooltip for the disclaimer.
  //   disclaimerTooltip: '',
  // },

  // Determines whether the message will be controlled externally. Default is false.
  // isControlledMessage: false,

  // Callback when the input message changes.
  // handleMessageChange: undefined,

  // Ref to the AIChat component's callable functions.
  // chatFunctionsRef: undefined,

  // if you want to show a "Get Help" button in the chat
  // getHelpCallToActions: [
  //   {
  //     icon: {
  //       builtIn: "FaQuestion"
  //     },
  //     name: 'Support',
  //     url: 'https://mydomain.com/support',
  //   }
  // ],

  // Customize the button labels in the chat footer.
  // actionButtonLabels: {
  //   clearButtonLabel: 'Clear',
  //   shareButtonLabel: 'Share',
  //   getHelpButtonLabel: 'Get help',
  //   stopButtonLabel: 'Stop',
  // },

};
