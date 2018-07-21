
# Api Gateway -> Lambda (Get One) -> DynamoDB

## Description

This is a serverless component consisting of:

- an API Gateway, receiving the request data
- a Lambda function, processes the request params and gets **one** item from
- a DynamoDB table, where all your data is stored.

Aside from this main functionality, its important features are:

- Supports CORS
- Written in Node.js
- Easily composable into your other app components by adding triggers to its DynamoDB table

It's a Nuts & Bolts application component for AWS Serverless Application Repository.

## Latest Release - 1.0.3

Added a few fixes regarding datatable naming:

- Enabled underscore `_` as an enabled character in the table name
- Fixed the CORS issue, now the GET request is CORS enabled as well

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests
- Conditional DynamoDB table creation
