'use strict';

const app = require('../app.js');
// const logic = require('../game_logic/logic.js');

const success = (data) => {
  app.game = data.game;
};

const updateSuccess = (data) => {
  app.game = data.game;
};


const fail = (error) => {};

const getGamesuccess = (data) => {
  $('.numGames_display').html(data.games.length + ' games played Bro');
};

const createGameSuccess = (data) => {
  app.game = data.game;
  $('#game_board').show();
};


module.exports = {
  success,
  createGameSuccess,
  updateSuccess,
  fail,
  getGamesuccess,
};
