'use strict';

// import { boiler } from 'boiler.js';
const { response } = require('../request');
const { phonebook } = require('../phonebook');
const { randomUUID } = require('crypto');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.add = async (event) => {
  try{

    const { name } = JSON.parse(event.body);

    const guid = randomUUID();

    const params = {
      Body: name.toString('binary'), 
      Bucket: 'mojphonebook', 
      Key: guid
    };
    
    await s3.putObject(params).promise();

    return response(200, { guid });
  } catch(err) {
      console.log(err);
      return response(500, { message: 'Server error' });
  }

};