# TEAMABLE APP (VUEJS + NODEJS)
Web application based based on Vuejs and NodeJS.
- It is best to launch and use Docker containers to run, you can of course try to run it locally too.

## Using Docker
  - First build the app by running `docker build -t teamable-app:v1 .` 
  - After the image has been built, run `docker compose up` to get the MongoDB database and mono-express running.
  - Go to `http://localhost:8081` to see the database environment.
  - View the front-end on `http://localhost:3000`.

**FIX**
A fix to this above, the docker-compose file somehow does not correctly link up the services, making it difficult to connect and store data.
The fix is to use the command line and run the commands individually.

Here is a walkthrough:
1. Create a network in docker. 
`docker network create mongo-network`

2. Set up the Mongo database first.
`docker run -d -p 27017:27017 --network mongo-network --name mongodb mongo`

3. Set up the application to connect to the database.
`docker run -d -p 3000:3000 --network mongo-network -e DB_HOST=mongodb -e DB_PORT=27017 -e DB_NAME=company_db --name=app teamable-app:v1`

4. Set up the mongo-express service to look have a view of the database.
`docker run -d -p 8081:8081 --network mongo-network -e ME_CONFIG_MONGODB_SERVER=mongodb --name mongo-express mongo-express`

With all these done, visit the application and interact with it. Visit the Mongo-Express service to look into the database.

**NB: Anyone who can help me create a working docker-compose file should feel free to contact me**
