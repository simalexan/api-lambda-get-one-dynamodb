
# Api Gateway -> Lambda (Get One) -> DynamoDB

## Description

This is a serverless component consisting of:

- an API Gateway, receiving the request data
- a Lambda function, processes the request params and gets **one** item from an existing DynamoDB Table

Aside from this main functionality, its important features are:

- Supports CORS
- Written in Node.js
- Easily composable into your other app components by adding triggers to its DynamoDB table

## Latest Release - 1.2.0

- Upgraded to Node.js 12.x LTS

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests
