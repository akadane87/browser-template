'use strict';

const app = require('../app.js');

const success = (data) => {
  app.game = data.game;
  console.log('success');
};

const updateSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};


const fail = (error) => {
  console.error('fail');
};


module.exports = {
  success,
  updateSuccess,
  fail,
};
