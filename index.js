const AWS = require('aws-sdk'),
    dynamoDb = new AWS.DynamoDB.DocumentClient(),
    processResponse = require('./process-response'),
    TABLE_NAME = process.env.TABLE_NAME,
    PRIMARY_KEY = process.env.PRIMARY_KEY,
    IS_CORS = true;

exports.handler = (event) => {
    if (event.httpMethod === 'OPTIONS') {
		return Promise.resolve(processResponse(IS_CORS));
    }
    const requestedItemId = event.pathParameters.id;
    if (!requestedItemId) {
        return Promise.resolve(processResponse(IS_CORS, 'invalid', 400));
    }

    const key = {};
    key[PRIMARY_KEY] = requestedItemId;
    const params = {
        TableName: TABLE_NAME,
        Key: key
    }
    return dynamoDb.get(params)
    .promise()
    .then(response => processResponse(IS_CORS, response.Item))
    .catch(err => {
        console.log(err);
        return processResponse(IS_CORS, 'dynamo-error', 500);
    });
};