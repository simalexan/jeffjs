# Jeff.js
WIP

### Jeff is your tool for generating and deploying serverless JavaScript applications

> Another boring code generator, right? Nothing can generate complex business logic. 

> You're right and that's exactly what Jeff isn't for.

### Jeff's goal is to help you with code overhead, helping you focus on what's important, instead of manually boring yourself with the generated code 
 
 
## How to Install?
 
```shell
npm install -g jeffjs
```
 
## How to Use?
 
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
  
WIP drawback: at the moment, the default Jeff deployment region is `us-east-1` will be changed soon