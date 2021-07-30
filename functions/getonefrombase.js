'use strict';

// import { boiler } from 'boiler.js';
const { response } = require('../request');
const { phonebook } = require('../phonebook');

const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.getonefrombase = async (event) => {

  try{

    const { key } = event.pathParameters

    const params = {
      Bucket: 'mojphonebook',
      Key: key
    }

    const data = await s3.getObject(params).promise();

    const stream = fs.createReadStream(data.Body, 'utf8');

    return response(200, data.Body.toString()); // buffer object to string, body is a buffer object
    
  }catch(err){
    console.log(err);
    return response(500, ' Fula oko');
  }

};