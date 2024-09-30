## PageAction

Triggers an action on page load.

## Features

Executes the configures action when the page is loaded. This can be any action, e.g. a microflow, nanoflow, etc. The
nanoflow may contain a JavaScript action which allows for executing JavaScript on page load.

## Usage

-   Add this widget on the page that requires a page load event.
-   fill the onLoad event of the widget with your desired action.

## Issues, suggestions and feature requests

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
