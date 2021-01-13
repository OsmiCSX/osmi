<p align="center"><img src="https://i.imgur.com/Drrulsw.jpg" alt="logo" width="414px"></p>

# Osmi Kit Boilerplate
## Battle-tested React Native boilerplate
Original concept of this boilerplate is from [Ignite](https://github.com/infinitered/ignite). We're really like the project structure from Ignite Boilerplate, especially for Ignite Andross. But we realize that Infinite Red team no longer maintain for the Andross Boilerplate. So, therefore we create an alternative boilerplate like Ignite Andross.

This is the React Native boilerplate that the [LibsCode](https://libscode.com/) and [CloudGakkai](https://cloudgakkai.dev/) team uses on a day-to-day basis to build client apps. Developers who use Osmi Kit report that it saves them two to four weeks of time on average off the beginning of their React Native project!

## Tech Stack
Osmi Kit include the following rock-solid technical decisions out of the box:
- React Native
- React Navigation 5
- OsmiCSX
- Redux-Saga
- Redux-Persist
- AsyncStorage
- apisauce (to talk to REST servers)
- Flipper-ready
- Reactotron-ready
- TDD-ready
- And more!

## Quick Start
Prerequisites:
- Make sure you already setup React Native environtment (Android SDK, Java, etc.). [See React Native docs](https://reactnative.dev/docs/environment-setup)

Install Global CLI:
```sh
// npm
npm install -g osmi-cli

// yarn
yarn global add osmi-cli
```

Run the CLI:
```sh
osmi new MyApp
```

And Osmi will walk you through the rest.

## Boilerplate walkthrough
Your `App` folder is where most of the goodies are found in an Osmi Kit app. Let's walk through them in more detail. Start with `Containers/App.js` (described below) and work your way down the walkthrough in order.

### Containers
Containers are (mostly) full screens, although they can be sections of screens or application containers.
* `App.js` - your main application. We create a Redux store and configure it here
* `RootContainer.js` - main view of your application. Contains your status bar and navigation component
* `LaunchScreen.js` - this is the first screen shown in your application. It's loaded into the Navigation component
* `WelcomeScreen.js` - this is the blank screen shown in your application. It's loaded into the Navigation component
* `Styles` - styling for each of the above containers and screens

To generate a new Container or Screen you can use the following generator commands:
* `osmi g container TestScreen` - Will create a `TestScreen.js` and also a `Styles/TestScreenStyle.js`.

### Navigation
Your primary and other navigation components reside here.
* `AppNavigation.js` - loads in your initial screen and creates your menu(s) in a StackNavigation

### Components
React components go here...pretty self-explanatory. We won't go through each in detail -- open each file to read the comments and view the code.

To generate a new Component you can use the following generator commands:
* `osmi g component Button` - Will create a `Button.js` and also a `Styles/ButtonStyle.js`.

### Themes
Styling themes used throughout your app styles. Since we're using OsmiCSX for the styling framework, `OsmiProvider` and `CustomTheme` goes here.

* `CustomTheme.js` - OsmiCSX custom theme.
* `OsmiProvider.js` - Provider of OsmiCSX.

### Config
Initialize and configure things here.

* `DebugConfig.js` - define how you want your debug environment to act
* `ReactotronConfig.js` - configures [Reactotron](https://github.com/infinitered/reactotron) in your project (Note: this [will be extracted](https://github.com/infinitered/ignite/issues/779) into a plugin in the future)
* `ReduxPersist.js` - configures Redux Persist

### Fixtures
Contains json files that mimic API responses for quicker development. These are used by the `Services/FixtureApi.js` object to mock API responses.

### Redux, Sagas
Contains a preconfigured Redux and Redux-Sagas setup. Review each file carefully to see how Redux interacts with your application.

Here again we have generators to help you out. You just have to use one of the following:
* `osmi g redux Amazing` - Will generate and link the redux for `Amazing`.
* `osmi g saga Amazing` - The same as above, but for the Sagas

### Services
Contains your API service and other important utilities for your application.

* `Api.js` - main API service, giving you an interface to communicate with your back end
* `FixtureApi.js` - mocks your API service, making it faster to develop early on in your app
* `ImmutablePersistenceTransform.js` - part of the redux-persist implementation
* `RehydrationServices.js` - part of the redux-persist implementation

### Lib
We recommend using this folder for modules that can be extracted into their own NPM packages at some point.

* `TextUtil.js` - lib for text manipulation and many more.

### Images
Contains actual images (usually png) used in your application.

### Tests
This folder (located as a sibling to `App`) contains sample Jest snapshot and unit tests for your application.

## Troubleshooting
If you found that the boilerplate is not installer properly on your React Native proect app. Usually it's because you already install the react-native-cli globally, to solve this try to run :
```sh
npm uninstall -g react-native-cli
// or
yarn global remove react-native-cli
```

## Special Thanks
Special thanks to [Infinite Red](https://infinite.red/) who create such as beautiful react-native boilerplate (Ignite CLI). And give the inspiration for me to create this alternative cli and boilerplate.
