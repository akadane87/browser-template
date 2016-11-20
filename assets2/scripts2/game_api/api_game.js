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
  // debugger;
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
    data,
  });
};

module.exports = {
  getAllGames,
  createGame,
  updateGame,
};
