## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

```bash
$ yarn deploy
$ yarn deploy:dev
```

The `serverless.yml` file is configured to deploy the project to AWS Lambda, the Prisma schema is configured to deploy the project to a PostgreSQL database. Additional configuration are in the `serverless.yml` file such as package individually, prune, etc. Also it is needed to include

```yaml
serverless-offline:
  hooks:
    'before:package:createDeploymentArtifacts':
      - npx prisma generate
  package:
  individually: true
  patterns:
    - '!.git'
    - '!.github'
    - '!src/**'
    - '!.gitignore'
    - '!esbuild.config.js'
    - '!nest-cli.json'
    - '!package-lock.json'
    - '!tsconfig*'
    - 'node_modules/.prisma/client/**'
    - '!node_modules/prisma/libquery_engine-*'
    - '!node_modules/@prisma/engines/**'
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
