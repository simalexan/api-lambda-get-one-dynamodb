const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const processResponse = require('./process-response');
const TABLE_NAME = process.env.TABLE_NAME;
const IS_CORS = true;

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