# Karmayoga Web UI - Documentation

Karmayoga Web UI is a frontend for the Karmayoga task scheduling application for humans.

This is the documentation for the project.

## Commands

### Build
- `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

- `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Documentation
* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The mkdocs documentation configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
    public/       # Contains statically hosted files such as favicons, logos, and seo texts.
    src/          # Contains the source code for this project.
    .circleci/    # Contains Circle CI configuration for CI builds.
    package.json  # Project metadata, dependencies etc.
