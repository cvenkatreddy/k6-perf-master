# Load Testing Using K6

This project is aimed to run load test on BE endpoints. in this project K6 library used to send parallelized HTTP requests to the services and simulate number of users on those requests to recognize bottleneck of the whole project with visual graphs that K6 will generate.

## Table of contents:

- [Load Testing Using K6](#load-testing-using-k6)
  - [Table of contents:](#table-of-contents)
  - [Pre-prerequisites](#pre-prerequisites)
    - [`.env` file](#env-file)
    - [Project structure](#project-structure)
    - [NPM Scripts](#npm-scripts)
    - [Build and run the tests](#build-and-run-the-tests)
  - [How to write load tests](#how-to-write-load-tests)
    - [step 1 : test directory](#step-1--test-directory)
    - [step 2 : each test case files](#step-2--each-test-case-files)
    - `checks.ts` 
    - `index.ts`
    - `inputs.ts`
    - `interfaces.ts`
    - `operations.ts`
    - `options.ts`
    - `requests.ts`

## Pre-prerequisites

### `.env` file

Read `.env.example` file for detailed explanation of each required variable and then create a copy, name it `.env` and set the appropriate values.

### Project structure

The folder structure is explained below:

| Name                 | Description                                                                           |
| -------------------- | ------------------------------------------------------------------------------------- |
| **.vscode**          | Contains VS Code specific settings                                                    |
| **node_modules**     | Contains all npm dependencies                                                         |
| **src**              | Contains source code                                                                  |
| **src/config**       | Contains configuration                                                                |
| **src/common**       | Contains all of the common utils function that used on different part of the project. |
| **src/apiv2**        | Contains all of test cases definitions                                                |
| .env.example -> .env | API Base URL and env vars passwords                                                   |
| .babelrc             | Contains Babel configs                                                                |
| tsconfig.json        | Config settings for compiling server code written in TypeScript                       |
| .eslintrc.js         | Config settings for ESLint code style checking                                        |
| .eslintignore        | Config settings for paths to exclude from linting                                     |
| .prettierrc          | Prettier configuration file                                                           |
| tsconfig.json        | Contains typescript configs                                                           |
| webpack.config.js    | Contains webpack configs                                                              |

### NPM Scripts

| Npm Script | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `build`    | build dist dir and transpile ts files into js files        |
| `lint`     | Runs ESLint on project files                               |
| `lint:fix` | Runs ESLint on project files automatically fixing problems |

### Build and run the tests

- Install k6 `brew install k6`
- Install packages `npm i`
- Run `npm run build`.
- Run test locally Execute `k6 run ./dist/src/apiv2/login-authentication.js`
- Run to upload results to k6cloud `K6_CLOUD_TOKEN=<projectId on k6> k6 cloud ./dist/src/apiv2/login-authentication.js`

## How to write load tests

### step 1 : test directory

Create a directory with the name of `service-name` on `src/service-name`.

### step 2 : each test case files

Create a directory with the name of test case that you want to add for that service and add these files into that directory `src/service-name/directory-name`: <br />

| Name              | Description                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| **checks.ts**     | Contains checks functions for each step in a load test                                           |
| **index.ts**      | Contains main structure of load test for load tests that includes all checks, etc.               |
| **inputs.ts**     | Contains all input values that each endpoint needs to make a validate request.                   |
| **interfaces.ts** | Contains all interfaces and types.                                                               |
| **operations.ts** | Contains any kind of http requests operation that included in the test case.                     |
| **options.ts**    | Contains K6 settings for that specific endpoint like number of users, duration of the test, etc. |
| **requests.ts**   | Contains all functions that using the input and operations to make HTTP request to and endpoint. |
