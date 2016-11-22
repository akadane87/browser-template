'use strict';

// const gameEvents = require('./events_game.js');
const app = require('../app.js');

window.app = app;

const getAllGames = function(player_x) {
  console.log('getAllGames');
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    player_x,
  });
};


const createGame = function() {
  console.log('createGame');
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


const updateGame = function (data) {
  console.log('inside updateGame data is', data);
  // debugger;
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data
  });
};

module.exports = {
  getAllGames,
  createGame,
  updateGame,
};
