'use strict';

// import { boiler } from 'boiler.js';
const { response } = require('../request');

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

module.exports.getonefrombase = async (event) => {

  try{

    const { name } = event.pathParameters

    const params = {
      ExpressionAttributeValues: {
        ':n': namee
      },
      KeyConditionExpression: 'name = :n',
      TableName: 'phonebook'
    };

    const data = await docClient.query(params).promise();
    
    return response(200, data);

  }catch(err){
    console.log(err);
    return response(500, ' Fula oko');
  }

};