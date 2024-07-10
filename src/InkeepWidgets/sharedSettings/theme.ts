import type { UserTheme } from "@inkeep/uikit";
// import { themes } from 'prism-react-renderer';

// const lightCodeTheme = themes.github;
// const darkCodeTheme = themes.dracula;

const theme: UserTheme = {
  // custom code block highlighting styles
  // syntaxHighlighter: {
    // lightTheme?: lightCodeTheme, // prism-react-renderer theme
    // darkTheme?: darkCodeTheme,
  // },

  // Additional customization can be done via CSS stylesheets. Because the widgets are isolated via a shadow DOM, any custom styling must be passed to the widget configuration in order for them to be applied.
  // stylesheets: [], // array of stylesheets (ex. [<link rel="stylesheet" href="/overrides.css" />])
  stylesheetUrls: ['/style-overrides.css'], // urls of stylesheets with overrides

  // primaryColors: {
  //   textBold: '#ffffff',
  //   textSubtle: '#ffffff',
  //   lighter: '#ffffff',
  //   light: '#ffffff',
  //   medium: '#ffffff',
  //   strong: '#ffffff',
  //   stronger: '#ffffff',
  //   hitContentPreview: '#ffffff',
  //   hitContentPreviewHover: '#ffffff',
  //   textColorOnPrimary: '#ffffff',
  // },
  // tokens: {
  //   fonts: {
  //     heading: "'Space Grotesk'",
  //     body: "'Inter'",
  //     mono: "'Space Mono', monospace",
  //   },
  //   colors: {
  //     'gray.100': '#e0e7ed',
  //     'gray.200': '#c5d0dc',
  //     'gray.300': '#9dafc3',
  //     'gray.400': '#6e87a2',
  //     'gray.500': '#536c87',
  //     'gray.600': '#475973',
  //     'gray.700': '#3e4c60',
  //     'gray.800': '#394251',
  //     'gray.900': '#2e3440',
  //     'gray.950': '#1e232e',
  //   },
  // },
  // components: {
  //   SearchBarTrigger: {
  //     defaultProps: {
  //       variant: "emphasized",
  //       size: "expand",
  //     },
  //   },
  //   AIChatPageWrapper: {
  //     defaultProps: {
  //       variant: "container-with-shadow", // or "no-shadow" to remove
  //       size: "expand"
  //     },
  //   },
  // },
};

export default theme;
