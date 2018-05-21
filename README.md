# apollinaire:vulcan-crisp v0.0.1

Plugin to integrate [Crisp](https://crisp.chat/) to a [Vulcan](http://vulcanjs.org/) app. 

## What this does

Currently, the following features are supported:

- one line to integrate crisp to your Vulcan app
- automatic setting of username and email based on Vulcan's authentication
- By default, Crisp is only included in production mode, but you can easily change this behaviour

## What this does not do

- all the other features offered by the Crisp SDK, including restoring session with a token.

## Installation

To use this plugin you must retrieve your Crisp Website Id, from your subscription to Crisp. 

The Website Id can be found after `window.CRISP_WEBSITE_ID=` in the  HTML integration section on [app.crisp.chat](https://app.crisp.chat). It looks like `253cd617-5a8f-4963-85b3-77ab91687196`. Once you have it, you can add it to your public settings in your project's settings.json file: 

```json
{
  "public": {
    "crispId": "253cd617-5a8f-4963-85b3-77ab91687196"
  }
}
```

Once this is done, you can run: 
```
meteor add apollinaire:vulcan-crisp
```
or manually add the line `apollinaire:vulcan-crisp` to your .meteor/packages file.

The package uses `[react-helmet](https://www.npmjs.com/package/react-helmet)` to inject javascript, but normally it should already be a dependency of Vulcan so you don't have to install anything more.

## Usage

The plugin uses Vulcan's `registerComponent` to register a component named `Crisp`. 
To add the chatbox to your page, you can add the following code to the layout you are using: 

```js
import { Components } from 'meteor/vulcan:core';

// inside you layout component

<Components.Crisp />

```
**By default, the component only includes Crisp on production.** To change this behaviour, you can add the `showOnDebug` prop to the component: 
```js
<Components.Crisp showOnDebug />
```

### Contributing

PRs and issues are welcome, but I don't have time to develop awesome features myself.
