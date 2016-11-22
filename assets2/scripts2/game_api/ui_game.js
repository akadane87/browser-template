'use strict';

const app = require('../app.js');
// const logic = require('../game_logic/logic.js');

const success = (data) => {
  app.game = data.game;
  console.log('success');
};

const updateSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};


const fail = (error) => {
  console.error(error);
};

const getGamesuccess = (data) => {
  console.log("This is data.game:" + data.game);
  // app.game = data.game;
  console.log(data);
  $('.numGames_display').html(data.games.length + ' games played Bro');
  console.log("get game success is ", data.games.length);
};

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log("create game data is ", data);
  console.log("create game app.game is ", app.game);
  $('#game_board').show();
  // logic.resetGlobalState();
};


module.exports = {
  success,
  createGameSuccess,
  updateSuccess,
  fail,
  getGamesuccess,
};
