# Jeff.js
WIP

### Jeff is your tool for generating and deploying serverless JavaScript applications
 
## Install
 
```shell
npm install -g jeffjs
```
 
## Usage
 
Generate a project within the project folder
 ```shell
 mkdir project-folder
 
 jeff gen --api crud --endpoints products --dynamo
 ```
 
 
Generate a project with the project folder
  ```shell
  jeff gen --api crud --endpoints products --dynamo --folder project-folder
  ```
  
This will generate a whole API with a `POST /products` route with DynamoDB access 
  
And now create & deploy your Lambda:
  ```shell
  npm run create
  ```
  
For further deployment updates just run
  ```shell
  npm run deploy
  ```
  
