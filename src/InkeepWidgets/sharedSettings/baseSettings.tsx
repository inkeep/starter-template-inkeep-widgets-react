import {
  InkeepWidgetBaseSettings,
  ConsoleDebugLevel,
  RemoteErrorLogsLevel,
} from "@inkeep/widgets";
import theme from "./theme";

export const inkeepBaseSettings: InkeepWidgetBaseSettings = {
  // The API key for your integration.
  apiKey: process.env.REACT_APP_INKEEP_INTEGRATION_API_KEY || "",

  // The identifier for the integration point. This might correspond to "Docs", "Dashboard", "Forums", etc.
  integrationId: process.env.REACT_APP_INKEEP_INTEGRATION_ID || "",

  // The identifier for your organization.
  organizationId: process.env.REACT_APP_INKEEP_ORGANIZATION_ID || "",

  // The display name for your organization.
  organizationDisplayName: "Inkeep",

  // The primary brand color, rest of default color scheme is derived from this.
  primaryBrandColor: "#522FC9",

  // The custom theme for the widget. Not required.
  theme: theme,

  // Name of the product.
  // product: '',

  // Version of the product.
  // productVersion: '',

  // User ID for analytics.
  // userId: 'af105def-f246-4665-ad6c-f89a2cfb2f70',

  // User email for analytics.
  // userEmail: 'nick@inkeep.com',

  // User name for analytics and showing initials in the UX like 'NG' in the chat experience.
  // userName: 'Nick Gomez',

  // Array of user cohorts to correlate to your own customer segmentation in analytics.
  // userCohorts: ['GROUP1'],

  // Callback function for logging events to integrate with your own analytics.
  // logEventCallback: (event: InkeepCallbackEvent) => { console.log(event) },

  // Option to disable cookies used for tracking a user's inkeep usage behavior. Default is false.
  // optOutAnalyticalCookies: false,

  // Option to disable all usage analytics, even anonymous ones. Default is false.
  // optOutAllAnalytics: false,

  // Option to disable cookies that are used for functionality. Default is false.
  // optOutFunctionalCookies: false,

  // The level of remote error logging for Inkeep's monitoring service. Default is IdentifiableErrors.
  // remoteErrorLogsLevel: RemoteErrorLogsLevel.IdentifiableErrors,

  // The level of logging to your console. Default is Errors.
  // consoleDebugLevel: ConsoleDebugLevel.Errors,

  // Domain for routing search and chat API calls through a proxy.
  // apiProxyDomain: "https://mysearchandchatproxy.com",


  // Option to enable or disable Inkeep branding. Default is true.
  // isInkeepMentionEnabled: true,

};
