# Getting Started with Inkeep Widget Library

## Install bun

If you already have bun installed you may skip to the next step
```
npm install -g bun
```

## Installing packages

```
bun add @inkeep/widgets@latest
```

### Installing peer dependencies

There are a few peer dependencies for the package. They are peer dependencies so that they don't conflict with projects that have different versions of the same package. Peer dependencies are not automatically installed, you need to install them.

#### Option 1

See all the `peerDependencies` in the `package.json` in the [npm package](https://www.npmjs.com/package/@inkeep/widgets?activeTab=code).

```
bun add <package>
```

#### Option 2

Use [install-peerdeps](https://www.npmjs.com/package/install-peerdeps)

```
yarn global add install-peerdeps
install-peerdeps @inkeep/widgets@latest
```

# Add environment variables

To call the chat and search service, you need to provide a few properties to the widget(s). In this sample project, they are stored as environment variables. Create an .env file with the following keys and fill in the values:

```
REACT_APP_INKEEP_INTEGRATION_API_KEY=
REACT_APP_INKEEP_INTEGRATION_ID=
REACT_APP_INKEEP_ORGANIZATION_ID=
```

# Configure the widget

See the `sharedSettings` example files to see the available configuration properties. These include text, themeing, and other functionality settings.

## Next.js and server-side apps

The component has to be fully loaded in the browser. You can use dynamic modules in Next.js to import the components you need, for example:

```
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
