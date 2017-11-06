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
  
And now create just deploy:
  ```shell
  jeff deploy
  ```