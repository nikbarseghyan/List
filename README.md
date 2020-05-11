# List

[![Node](https://img.shields.io/badge/node--lts-v12.16.3-brightgreen)]()
[![KISS pattern](https://img.shields.io/badge/KISS-true-yellow)]()
[![DRY pattern](https://img.shields.io/badge/DRY-true-brightgreen)]()
[![Testing](https://img.shields.io/badge/Total%20tests-1-blue)]()

### This project is designed to update the story in List.am

```sh
.
│   .editorconfig                       # Editor config file
│   .env.example                        # Environment variables
│   .eslintrc.js                        # EsLint config file
│   .gitignore                          # Git ignore file
│   .prettierrc.json                    # Prittier config file
│   docker-compose.yml                  # Docker compose file
│   index.js                            # Entry point
│   package.json
│   pm.js                               # pm2 init
│   README.md
│   release.sh                          # Bash script
│   tsconfig.json                       # TypeScript config JSON
│   yarn.lock
│
├───src                                 # Source folder
│   │   index.js                        # Index entry point
│   │
│   ├───config                          # Configuration files
│   │       index.js
│   │
│   ├───core                            # Business logic implementation
│   │       index.js
│   │
│   ├───db                              # Data access stuff
│   │   │   index.js
│   │   │
│   │   ├───migrations                  # Migrations
│   │   └───models                      # Database models
│   ├───routes                          # Routes
│   │   │   index.js
│   │   │
│   │   ├───controllers                 # Request managers
│   │   └───middelewares                # Request middlewares
│   └───services                        # External services implementation
│           index.js
│
├───test                                # Testing

```

```sh
$yarn install
$yarn run start
```

### Recurse

[Node](https://nodejs.org/)
[Yarn](https://yarnpkg.com/)
[NPM](https://www.npmjs.com/)
[Koa](https://koajs.com/)
[Express](https://expressjs.com/)
[Typescript](https://www.typescriptlang.org/)
[Docker](https://www.docker.com/)
[Prettier](https://prettier.io/)
[esLint](https://eslint.org/)
