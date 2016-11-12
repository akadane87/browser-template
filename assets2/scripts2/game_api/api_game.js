'use strict';

// const gameEvents = require('./events_game.js');
const app = require('../app.js');

const getAllGames = function() {
  console.log('getAllGames');
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    Authorization: 'Token token=' + app.user.token,
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
    game: {},
  });
};


const updateGame = function (data) {
  console.log('updateGame');
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

module.exports = {
  getAllGames,
  createGame,
  updateGame,
};
