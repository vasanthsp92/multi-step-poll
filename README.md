Multi step poll

## Installation

    1. cd to the root directory that you use to store your codebase.

    2. clone the multi step poll

## Steps and scripts to follow

In the project directory, you can run:

### Step1: `npm install`

Install the needed package for this application

### Both step 2 and 3 should run simulateously for App and Server

### Step 2: `npm run start:app`

Runs the app
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Step 3: `npm run start:server`

Launch new command prompt / Git bash and run the above command
Runs the server (json-server) in http://localhost:4000 to save the final data in json/mockDB (mockDb.json)

### Step 4:

To pass questions in carousel component

1.  Update "Questions" array of object in the path ./src/data/Questions.js
    ## or
2.  pass new set of questions as array of object in App.js file to the carousel component
    In below format
    ques = Left side question/title
    options = [
    {
    icon (required): import icons from fontawesome
    label (required): label for the icon and save this value in db
     }
    ]  
     Format:
    [
        {
            ques: "Question 1",
            options: [
                {
                icon: faThumbsDown // import icons from fontawesome package and pass to component,
                label: "UnLike" // icon Label/Value,
                },
                {
                icon: faThumbsUp,
                label: "Like",
                },
                {
                icon: faLaugh,
                label: "Very Happy",
                },
                {
                icon: faFaceFrown,
                label: "Happy",
                },
                {
                icon: faSmile,
                label: "Happy",
                },
            ],
        },
    ]

### `npm run test`

Runs the test case for each test files created and will show the status of the testing
