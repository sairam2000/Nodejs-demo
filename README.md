# Nodejs-demo

## Getting Started

To get started, you have to fork this repo to your own GitHub account first. Then open up a terminal on your machine and enter the following commands:

```
git clone https://github.com/<your user name>/Nodejs-demo.git
cd Nodejs-demo
npm install
```
After installing the required packages, now add the KEYS.js file in root folder and add the below code:

```
module.exports = {
    "MONGO_URI" : <mongoDb uri>
}
```

Now replace the `<mongoDb uri>` with your mongoDb database URI.

Now enter the following command in the terminal to run the Nodejs server:

```
npm start
```

This will start the development server on http://localhost:3000/. This page should reload automatically when you make changes to the code, but no code is perfect, so sometimes you may need to restart it. :)


## API documentation

https://documenter.getpostman.com/view/13999929/TzmBEuGS
