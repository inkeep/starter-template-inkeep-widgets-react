import {
  type InkeepBaseSettings,
  ConsoleDebugLevel,
  RemoteErrorLogsLevel,
} from "@inkeep/uikit";
import theme from "./theme";


export const inkeepBaseSettings: InkeepBaseSettings = {
  // The API key for your integration.
  apiKey: import.meta.env.VITE_INKEEP_INTEGRATION_API_KEY || "",

  // The identifier for the integration point. This might correspond to "Docs", "Dashboard", "Forums", etc.
  integrationId: import.meta.env.VITE_INKEEP_INTEGRATION_ID || "",

  // The identifier for your organization.
  organizationId: import.meta.env.VITE_INKEEP_ORGANIZATION_ID || "",

  // The display name for your organization.
  organizationDisplayName: "Inkeep",

  // The primary brand color, rest of default color scheme is derived from this.
  primaryBrandColor: "#26D6FF",

  // The custom theme for the widget. Not required.
  theme: theme,

  // override the various icons with your own or builtin options
  // customIcons: {
  //   search: { builtIn: 'IoSearch' },
  //   thumbsUp: { custom: '/path-to-your-icon.svg' },
  // },

  // colorMode: {
  //   forcedColorMode: 'light', // 'light' or 'dark'
  //   enableSystem: true, // use system color mode
  // },

  // User ID for analytics.
  // userId: 'af105def-f246-4665-ad6c-f89a2cfb2f70',

  // User email for analytics.
  // userEmail: 'nick@inkeep.com',

  // User name for analytics and showing initials in the UX like 'NG' in the chat experience.
  // userName: 'Nick Gomez',

  // filters: {
    // Name of the product.
    // product: '',
    // Version of the product.
    // productVersion: '',
    // attributes: {
    //   $and: [
    //     { environment: "PRODUCTION_1" },
    //   ]
    // }
  // }

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
  // chatApiProxyDomain: "https://mysearchandchatproxy.com",

  // Domain for routing analytics API calls through a proxy.
  // analyticsApiProxyDomain: "https://myanalyticsproxy.com",

  // Specify the rules for how to display breadcrumbs
  // breadcrumbRules: {
  //   style: 'TITLE_CASE', // 'LOWER_CASE' | 'TITLE_CASE' | 'UPPER_CASE' default styling of paths to breadcrumbs
  //   urlToBreadcrumbMapper: [
  //     {
  //       matchingRule: {
  //         ruleType: 'PartialUrl',
  //         partialUrl: 'mydomain.com',
  //         maxNChildSubpaths: 1, // If set, then breadcrumb is only emitted if there at least N child subpaths. By default, this is 1.
  //       },
  //       breadcrumbName: 'string',
  //       replaceLeading: false,
  //     },
  //     {
  //       matchingRule: {
  //         ruleType: 'SubpathOnly',
  //         subpath: 'depth1',
  //       },
  //       breadcrumbName: 'string',
  //       replaceLeading: false,
  //     }
  //   ], // e.g. to have urls starting with mydomain.com/{subpath} have the first breadcrumb be "Home". E.g. { "mydomain.com": "Home" }
  // },

  // Tab configuration, by default, there is an 'All' tab, a tab for all 'DocumentationRecords', and one for "Discourse", "StackOverflow", and "GitHub".
  // customCardSettings: [{
  //   filters: {
  //     ALL: true,
  //   },
  //   icon: {
  //     builtIn: 'FaBook', // or custom: 'https://mydomain.com/myicon.png'
  //   },
  //   searchTabLabel: 'All',
  // }],

  // stringReplacementRules: [
  //   {
  //     matchingRule: {
  //       ruleType: 'Substring',
  //       string: 'Api',
  //     },
  //     replaceWith: 'API',
  //     replaceInTitles: true,
  //   },
  // ],

  // set to 'development' to use the dev environment. Default is 'production'.
  // env: 'development', // 'development' | 'production',

  // use your own instance of the Prismjs (https://prismjs.com/) library, we recommend doing this if you are using any plugins or doing any custom modifications to the instance of Prism in your application to avoid conflicts with the global Prism namespace. Note that you will need to import any additional languages you wish the syntax highlighter to support.
  // prism: PrismLib,

  // Optional query parameters to be added to documentation links. Useful for click tracking via UTM tags.
  // appendQueryParamsToUrls: {
  //   utm_source: 'inkeep_widget',
  // },

};
