# Sophos university 

## Technologies
This API has been builded over Nestjs framework

## Requisites
You need to have a postgreSQL database running and NodeJs installed

## Installation

`npm i`

## Setup

### Enviroment variables
create .env file in the project root directory. Within this file we will do all the databases configuration. This file should look like this

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=test
DATABASE_NAME=sophos
PORT=3000
```

# Run
to start the app in development mode, you can run, and it will listen on PORT 3000 for default
`npm run start:dev`

# Docs
visit `/docs` endpoint to see all the documentation. This includes api endpoint schemas and usage example.

![Screenshot](/docs/docs.png)


