# Getting Started with Inkeep Widget Library

## To run this sandbox

### Install deps

We'll use bun for the rest of this example, but should work similarly across `npm`, `yarn`, and `pnpm`

``` bash
bun install
```


### Add environment variables

See below on adding the necessary env vars

### Start the dev server

``` bash
bun start
```

That's it! Play around with the `sharedSettings` file to enable different features.

## To get started integrating into your own app

## Installing packages

``` bash
bun add @inkeep/widgets@latest
```

### Peer dependencies

This widgets library requires `react` and `react-dom` version 18 as peer dependencies. If you use an older version for your project, you can use the JS Script version instead, see the quickstart [here](https://github.com/inkeep/starter-template-widgets-embed).

## Add environment variables

To call the chat and search service, you need to provide a few properties to the widget(s). In this sample project, they are stored as environment variables. Create an .env file with the following keys and fill in the values:


```ts
INKEEP_INTEGRATION_API_KEY=
INKEEP_INTEGRATION_ID=
INKEEP_ORGANIZATION_ID=
```

Modify for your project as needed, e.g. for CRA, prefix with `REACT_APP`)

## Configure the widget

See the `sharedSettings` example files to see the available configuration properties. These include text, theming, and other functionality settings.

## Next.js and server-side apps

In SSR applications, the Inkeep React components should be loaded client side.

In Next.js, you can use dynamic imports like so:

``` js
const InkeepEmbeddedChatWidget = dynamic(
  () =>
    import("@inkeep/widgets").then(
      (mod) => mod.InkeepEmbeddedChatWidget
    ),
  {
    ssr: false,
  }
);

// in your component:
// <InkeepEmbeddedChatWidget {...inkeepAIChatWidgetProps} />
```

Or in Next.js 13, you can add the `'use client'` directive at the top of a page where you use the component.

## Custom Styling

If you would like to override particular styles in a widget, this can be done via stylesheets that are passed to the widget as props, either an array of stylesheet urls or an array of link components. See `style-overrides.css` in the public folder for some examples.

``` ts
const InkeepEmbeddedChatSettings: InkeepEmbeddedChatProps = {
  stylesheetUrls: ['/style-overrides.css'],
  stylesheets: [<link rel="stylesheet" href="/overrides.css" />],
  baseSettings: { ...inkeepBaseSettings },
  aiChatSettings: { ...inkeepAIChatSettings },
};

export const EmbeddedChat = () => {
  return (
    <InkeepEmbeddedChat {...InkeepEmbeddedChatSettings} />
  );
};
```

## Available Scripts

In the project directory, you can run:

### `bun start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `bun test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `bun run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
