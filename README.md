# TEAMABLE APP (VUEJS + NODEJS)
Web application based based on Vuejs and NodeJS.
- It is best to launch and use Docker containers to run, you can of course try to run it locally too.

## Using Docker
  - First build the app by running `docker build -t teamable-dev:v1 .` 
  - After the image has been built, run `docker compose up` to get the MongoDB database and mono-express running.
  - Go to `http://localhost:8081` to see the database environment.
  - View the front-end on `http://localhost:3000`.
