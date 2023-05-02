// sample theme
const overrideTheme = {
  // primaryColors: {
  //   textBold: null,
  //   textSubtle: null,
  //   lighter: null,
  //   light: null,
  //   medium: null",
  //   strong: null,
  //   stronger: null,
  //   hitContentPreview: null,
  //   hitContentPreviewHover: null,
  // },
  fontUrls: ['https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&family=Lato&display=swap'], // add additional fonts / weights
  fonts: {
    heading: '\'Lato\'',
    body: '\'Lato\'',
  },
  components: {
    UserAvatar: {
      styles: {
        // background: '',
        // color: "inkeepPrimary.strong",
      },
    },
    AIChatPageWrapper: {
      baseStyle: {
        color: 'gray.800',
      },
      defaultProps: {
        variant: 'with-shadow',
      },
    },
    Code: {
      styles: {
        backgroundColor: '',
        border: '1px solid',
        // color: "",
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    Sup: {
      styles: {
        a: {
          background: '',
          color: 'inkeepPrimary.strong',
          px: '4px',
          py: '1px',
          borderRadius: 'sm',
          fontWeight: 'bold',
          _hover: {
            // hover styles here
            // background: '',
            // color: 'white',
          },
        },
      },
    },
    CodeBlockHeader: {
      styles: {
        background: '',
        border: '1px solid',
        // color: "",
        borderBottom: 'none',
        borderRadius: '6px 6px 0px 0px',
      },
    },
    SyntaxHighlighter: {
      highlighter: 'hljs', // prism or hljs (prism by default)
      // highlighterTheme: {},
      styles: {
        // backgroundColor: "",
        // color: "",
        border: '1px solid',
        borderTop: 'none',
        borderRadius: '0px 0px 6px 6px',
      },
    },
  },
};

export default overrideTheme;