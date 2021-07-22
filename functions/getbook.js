'use strict';

// import { boiler } from 'boiler.js';
const { response } = require('../request');
const { phonebook } = require('../phonebook');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.hello = async (event) => {

  try{

    const params = {
      Bucket: 'mojphonebook'
    }

    const data = await s3.listObjectsV2(params).promise();

    return response(200, data);

  }catch(err){
    console.log(err);
    return response(500, ' Not found oko');
  }

};