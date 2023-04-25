# Flame Chat
  ![License](https://img.shields.io/badge/license-MIT-red.svg)

## Description
 A single-page PWA text editor that runs in the browser but can also function offline. It provides a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. It utilizes GET and PUT methods to retrieve and store data to an IndexedDB database.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Questions](#questions)

## Installation

The application can be accessed by the deployed link (see Usage section below). It can also be ran locally by following these steps:

1. Clone the repository to your machine.

2. Open the terminal in the root directory and enter the command `npm install` to install all required dependencies.

3. Enter the command `npm run start` to start up the backend server and serve the client.

4. Visit the url http://localhost:3000 to view the application.

## Usage

The deployed application can be accessed at the following link (https://thought-compiler.herokuapp.com/). After entering text and clicking out of the window, it will be saved to the IndexedDB database. If the page is refreshed or closed, the data will persist and be retrieved from the IndexedDB database.

![image](https://user-images.githubusercontent.com/116316302/234416851-cb605ee7-3abd-49a6-98ff-9af1ab33c3ad.png)

The following image shows the manifest.json file.

![image](https://user-images.githubusercontent.com/116316302/234417192-868e46bf-071a-4f16-a8bf-4b9436433505.png)

The following image displays the registered service worker.

![image](https://user-images.githubusercontent.com/116316302/234417338-0541673b-1cc2-4254-bbd3-7bf0c97869f5.png)

The following image shows the application's IndexedDB storage.

![image](https://user-images.githubusercontent.com/116316302/234418847-da16e1d7-9e75-444b-9f98-9104ed1e88cf.png)

The following image shows the web application downloaded as an app on your desktop that can be used offline.

![image](https://user-images.githubusercontent.com/116316302/234419202-cc3ddbc9-d846-4ade-9514-6add433a1483.png)

## License
  This application is licensed by the MIT license.
  
## Credits
  
Starter code provided by [Xandromus](https://github.com/coding-boot-camp/cautious-meme)

## Questions

For any questions, please contact me at jared.tichacek@gmail.com. Feel free to check out more of my projects at [jtich40](https://github.com/jtich40)!

