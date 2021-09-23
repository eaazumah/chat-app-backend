# Baqust Rest

Create a service that collect data from cryptocompare.com using its API and stores it in a database
(MySQL/PostgreSQL/Mongo)

A few things to note in the project:

-   **[Github Actions Workflows](https://github.com/sidhantpanda/docker-express-typescript-boilerplate/tree/master/.github/workflows)** -
    Pre-configured Github Actions to run automated builds, testing and deployment
-   **[GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices.)** -
    GitFlow standard is used as a work flow.

-   **[Express](https://socket.io/)** - Express is used as the rest sever.

-   **[Apollo Sever](https://www.apollographql.com/docs/apollo-server/)** - Apollo Sever is used as a graphql sever.

-   **[Redis](https://redis.com/)** - Redis is used for caching and pubsub.

-   **[.env file for configuration](#environment)** - Change server config like app port, mongo url etc

-   **Mocha** - Using Mocha for running test cases

## I. Installation

#### 1. Clone this repo

```
$ git clone git@github.com:sidhantpanda/docker-express-typescript-boilerplate.git your-app-name
$ cd your-app-name
```

#### 2. Install dependencies

```
$ npm i
```

## III. Development

Github actions automated deployment to heroku

### Start dev server

```
$ npm run dev
```

Running the above commands results in

-   🌏**API Server** running at `http://localhost:3000`
-   🌏**SOCKET.IO Server** running at `http://localhost:3000`
-   🌏**GRAPH QL Server** running at `http://localhost:3000/graphql`

### API

## REST

```
Local
http://localhost:3000/api/price?fsyms=BTC,LINK,MKR&tsyms=USD,EUR,ETH,LTC
```

```
Live
https://baqust-price-test.herokuapp.com/api/price?fsyms=BTC,LINK,MKR&tsyms=USD,EUR,ETH,LTC
```

Will return all pair prices

## GRAPHQL

```
Local
http://localhost:3000/graphql/
```

```
Live
https://baqust-price-test.herokuapp.com/graphql/
```

Will open a graphql playground

Please note graphql playground has been disable on production server **[Firecamp](https://firecamp.io/)** graphql
environment can be used for testing

### Example query

```
query ExampleQuery($getPricePairsInput: GetPricePairs!) {
  getPricePairs(input: $getPricePairsInput)
}

```

Query variables

```
{
  "getPricePairsInput": {
    "fsyms": "BTC,LINK",
    "tsyms": "USD"
  }
}
```

## SOCKET IO

### Connection

Using the the **[socket io client library](https://socket.io/docs/v3/client-api/)** connect using the below url format
fsyms and tsyms can be change to much client needs

```
Local
http://localhost:3000?fsyms=BTC,LINK,MKR&tsyms=USD,EUR,ETH,LTC
```

```
Live
https://baqust-price-test.herokuapp.com/api/price?fsyms=BTC,LINK,MKR&tsyms=USD,EUR,ETH,LTC
```

Add and event listeners for `data`

**[Firecamp](https://firecamp.io/)** socket io environment can be used for testing

## Deployment

A deploy CI has been setup to auto deploy on push to main to heroku

You checkout the live server at

-   🌏**API Server** running at `https://baqust-price-test.herokuapp.com`
-   🌏**SOCKET.IO Server** running at `https://baqust-price-test.herokuapp.com/`
-   🌏**GRAPH QL Server** running at `https://baqust-price-test.herokuapp.com/graphql`

---

## Environment

To edit environment variables, create a file with name `.env` and copy the contents from `.env.default` to start with.

| Var Name     | Type   | Default       | Description                            |
| ------------ | ------ | ------------- | -------------------------------------- |
| NODE_ENV     | string | `development` | API runtime environment. eg: `staging` |
| PORT         | number | `3000`        | Port to run the API server on          |
| MONGO_DB_URI | string | ``            | URL for MongoDB                        |
| REDIS_PORT   | string | ``            | Port to the Redis server               |

| REDIS_HOST | string | `` | Redis host |

| REDIS_PASSWORD | string | `` | Redis Redis auth password |

### Directory Structure

```
+-- .github
|   +-- workflows
|   |   +-- develop.yml
|   |   +-- main.yml
+-- src
|   +-- @types
|   |   +-- deceleration.ts
|   |   +-- schema.ts
|   +-- datastores
|   |   +-- mongo-db.ts
|   +-- grahpql
|   |   +-- schema.ts
|   |   +-- channel
|   |   |   +-- resolvers.ts
|   |   |   +-- types.ts
|   |   |   +-- ...more files.ts
|   |   +-- message
|   |   |   +-- resolvers.ts
|   |   |   +-- types.ts
|   |   |   +-- ...more files.ts
|   |   +-- user
|   |   |   +-- resolvers.ts
|   |   |   +-- types.ts
|   |   |   +-- ...more files.ts
|   +-- models
|   |   +-- model.channel.ts
|   |   +-- model.message.ts
|   |   +-- model.user.ts
|   +-- server
|   |   +-- apollo.server.ts
|   |   +-- create.express.app.ts
|   |   +-- subscription.server.ts
|   +-- services
|   |   +-- init.env.ts
|   |   +-- services.pubsub.ts
|   +-- utils
|   |   +-- constants.ts
|   |   +-- format-page.ts
|   +-- app.ts
+-- .env
+-- .prettirrc
+-- .gitignore
+-- commitlint.config.js
+-- nodemon.json
+-- yarn.lock
+-- package.json
+-- README.md
+-- tsconfig.json

```

## III. Contribution

## Git Workflow

Contribution to this project must follow the
**[GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices.)**
workflow

## Commits

Commits messages must follow **[Conventional Commits Spec](https://www.conventionalcommits.org/en/v1.0.0/)**

Use npm run commit to commit messages

```
$ npm run commit
```
