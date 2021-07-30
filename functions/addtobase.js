'use strict';

// import { boiler } from 'boiler.js';
const { response } = require('../request');
const { randomUUID } = require('crypto');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

module.exports.add = async (event) => {
  try{

    const person = JSON.parse(event.body);

    const guid = randomUUID();

    person.guid = guid;

    const params = {
      TableName: 'phonebook',
      Item: person
    };

    console.log(person);

    await docClient.put(params).promise();

    return response(200, {message: 'Great success! ' + JSON.stringify(person)})

  } catch(err) {
      console.log(err);
      return response(500, { message: 'Server error '});
  }

};