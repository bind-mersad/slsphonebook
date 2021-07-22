'use strict';

// import { boiler } from 'boiler.js';
const { response } = require('../request');
const { phonebook } = require('../phonebook');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.delete = async (event) => {

  try{
    const { key } = event.pathParameters;

    const params = {
        Bucket: 'mojphonebook',
        Key: key
      }

    await s3.deleteObject(params).promise();

    return response(200, ' Izbrisasmo ga picko!');


  }catch(err){
      console.log(err);
      return response(500, ' Okooo, necee.');
  }
  

};