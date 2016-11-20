'use strict';

const api = require('./api_game.js');
const ui = require('./ui_game.js');
// const app = require('../app.js');
const glowBall = require('../game_logic/global.js');

const onGetAllGames = function(event){
  console.log('onGetAllGames');
  event.preventDefault();
  api.getAllGames()
  .then(ui.getGamesuccess)
  .fail(ui.fail);
};

const onCreateGame = function(event){
  console.log('onCreateGame');
  event.preventDefault();
  api.createGame()
  .then(ui.createGameSuccess)
  .fail(ui.fail);
};

const onUpdateGame = function(){
  let data = {
    "game": {
    "cell": {
      "index": glowBall.vars.boardIndex,
      "value": glowBall.vars.boardValue,
    },
      "over": glowBall.vars.gameOver,
    },
  };
  console.log('inside onUpdateGame data is', data);
  api.updateGame(data)
    .then(ui.Updatesuccess)
    .fail(ui.fail);
};

const addEventHandlers = () => {
  $( "#create_game" ).on('click', onCreateGame);
  // $('#game_board').hide();
};

module.exports = {
  addEventHandlers,
  onGetAllGames,
  onCreateGame,
  onUpdateGame,
};
