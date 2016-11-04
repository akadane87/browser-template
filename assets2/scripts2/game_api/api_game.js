'use strict';

const gameEvents = require('./events_game.js');
const app = require('../app.js');

const getAllGames = function(){
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    Authorization: 'Token token=' + app.user.token,
  });
};


const createGame = function() {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    game: {},
  });
};


const updateGame = (data) =>
 $.ajax({
    url: app.host + '/games/', + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
  },
  data,
});

module.exports = {
  getAllGames,
  createGame,
  updateGame,
};
