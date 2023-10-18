# Getting Started with Inkeep Widget Library

## To run this sandbox

### Install bun

Install bun (if you haven't already)

``` bash
npm install -g bun
```

### Install deps

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

```bash
yarn add @inkeep/widgets@latest
```

or

``` bash
bun add @inkeep/widgets@latest
```

### Installing peer dependencies

There are a few peer dependencies for the package. They are peer dependencies so that they don't conflict with projects that have different versions of the same package. Peer dependencies are not automatically installed, you need to install them.

#### Option 1

See all the `peerDependencies` in the `package.json` in the [npm package](https://www.npmjs.com/package/@inkeep/widgets?activeTab=code).

``` bash
yarn add <package>
```

or

``` bash
bun add <package>
```

#### Option 2

Use [install-peerdeps](https://www.npmjs.com/package/install-peerdeps)

``` bash
yarn global add install-peerdeps
install-peerdeps @inkeep/widgets@latest
```

## Add environment variables

To call the chat and search service, you need to provide a few properties to the widget(s). In this sample project, they are stored as environment variables. Create an .env file with the following keys and fill in the values:

```js
REACT_APP_INKEEP_INTEGRATION_API_KEY=
REACT_APP_INKEEP_INTEGRATION_ID=
REACT_APP_INKEEP_ORGANIZATION_ID=
```

## Configure the widget

See the `sharedSettings` example files to see the available configuration properties. These include text, theming, and other functionality settings.

## Next.js and server-side apps

The component has to be fully loaded in the browser. You can use dynamic modules in Next.js to import the components you need, for example:

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
