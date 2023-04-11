# YGO Banlist Database

This app allows you to browse historic banlists for the YGO TCG and OCG. This is useful for anyone who wants to play old formats. Users can also create accounts to add favorite banlists and create custom banlists with shareable links (when the app is finished).

# Stack
React, Express, MariaDB

# Installation

These instructions assume you are running Ubuntu through WSL

`sudo /etc/init.d/mysql start` to start the mariaDB service
`sudo update-rc.d mysql defaults` to make the mariaDB service run on startup

# Deployment

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

