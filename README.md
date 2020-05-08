# Algorithms Visualizer in ReactJS

__Student:__ Kevin Niland
<br>
__Supervisor:__ Dr. Martin Kenirons

---

## Introduction
This repository contains all the source code and files for the Algorithms Visualizer in ReactJS and the accompanying dissertation. The repository also contains a link to a video which gives an overview of the repository and a demo of the application itself.

## Requirements
* npm 5.2+ - To create the application, `npx` is used which comes with npm 5.2+
* Python 2.7+ - The various libraries used are supported from Python 2.7+
* Firebase 7.16.1 - Firebase version 7.16.1 was used
* Docker 19.03.1 (Optional) - To dockerize the application, Docker version 19.03.1 was used. This is an optional requirement, however.

## Technologies
The following technologies were used to develop the application:
* ReactJS
* Flask/Python
* PythonAnywhere
* MongoDB
* Firebase
* Docker

## How to run
1. Download or clone the repository using `git clone https://github.com/kevinniland97/Applied-Project-and-Minor-Dissertation`.
2. Navigate to the root of the project directory.
3. Run `npm install` to install all necessary libraries.
4. Run `npm run start`. The application will then be available on localhost:3000.
5. The Flask server located at http://kniland97.eu.pythonanywhere.com is available for use. However, if you wish to run the Flask server locally (and make any changes/additions you see fit), follow these steps:
   1. Edit `package.json` and change the line `"proxy": "http://kniland97.eu.pythonanywhere.com"` to `"proxy": "http://localhost:5000"`.
   2. Navigate into the backend folder and run the command `python serve.py`. The Flask server is now able to be run locally and you will now be able to apply any changes/additions to it.

## Hosting
The application can be found at https://algorithms-visualiser-react.firebaseapp.com/.

The application can also be deployed using Docker. To build it using Docker, run the command `docker build . -t image-name` in the root of the project directory (on Windows, I first had to 'startup' Docker). Then run `docker ps` to get the container ID of the newly created Docker image. With the container ID, run `docker exec -it container-id sh`. This will open a command line specific to this container ID. Running `npm start` will then run the application.

## Demo
The demo of the project and an overview of the project repo and code is available here: 
