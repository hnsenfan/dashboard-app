# Dashboard App

Fullstack web project for university finder application built with React v17.0.2 and NodeJS (as per February 2024)

## Requirements
### Client
* node `^10.17.0`
* npm `^6.11.3`
### Server
* node `^14.17.1`
* npm `^6.14.13`
## Getting started

### 1. Clone this repository

```
git clone https://github.com/hnsenfan/dashboard-app.git
```

### 2. Navigate to the directory - Server

```
cd dashboard-app
cd server
```

### 3. Install dependencies - Server

```
// make sure to use node v14.17.1
npm install --save
```

### 3a. Install dependencies - Docker
``Stay in server folder and ensure you have Docker installed ``

Build the image

`docker build -t my-postgres-image .`

Run the container

`docker run --name my-postgres-container -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 my-postgres-image`

Run command below to ensure the container is running

`docker ps`

### 4. Run locally - Server

Runs the app in development mode.

```
npm start
```
Watch for console message `Server Listening on 8082` - this means the server is started and running

### 5. Navigate to the directory - Client

Open a new terminal side-by-side and navigate through the same root directory

```
cd dashboard-app
cd client
```

### 6. Install dependencies - Client

```
npm install --save
```

### 7. Run locally - Client

Runs the app in development mode.

```
npm start
```

Watch for console message `Compiled successfully! You can now view client in the browser.`
Then open `http://localhost:3082` to view it in the browser- your development site will show up there. The page will automatically reload if you make any changes and save the code.


## Demo - What you need
Currently for early development and testing phase (as per February 2024), only 1 user can be used to test the available features. \
This is caused by the username is already passed as a hardcoded parameters across all the API calls from the client \

From the server side, you can check the user data in `users.json` for the username and password in order to login through the client's site 

## Available Scripts

#### In both of the project directories, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3082](http://localhost:3082) to view the frontend UI in the browser.

The page will reload if you make edits.

#### Additionally, in the `client` project directory, you can run
### `npm run lint`
Lint all `.js` files in `src` folder - in order to catch any lint errors

### `npm run test`

Launches the test runner in the interactive watch mode.\
JS tests files for each components are located in `src/tests` \
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Launches the test runner for one time and at the end, a coverage information will be reported in the output .\

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Credits

The iconset was designed by Flaticon (https://www.flaticon.com) \
The images were taken from shutterstock (https://www.shutterstock.com/)

## Authors

* **Hansen Fan** - (https://github.com/hnsenfan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
