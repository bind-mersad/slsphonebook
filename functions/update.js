'use strict';

// import { boiler } from 'boiler.js';
const { response } = require('../request');
const { phonebook } = require('../phonebook');

module.exports.update = async (event) => {

  const { name } = JSON.parse(event.body);

  return response(200, name + ' updated, oko!')

};