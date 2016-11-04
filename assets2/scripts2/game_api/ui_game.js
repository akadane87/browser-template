'use strict';

const app = require('assets2/scripts2/app.js');

const success = (data) => {
  app.game = data.game;
  console.log(data);
};

const updateSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};


const fail = (error) => {
  console.error(error);
};


module.exports = {
  success,
  updateSuccess,
  fail,
};
