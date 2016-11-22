'use strict';

const api = require('./api_game.js');
const ui = require('./ui_game.js');
const glowBall = require('../game_logic/global.js');

function resetGlobalState() {
  let fresh = new Array(9);
  glowBall.vars.board = fresh.fill("");
  $('.box_x').removeClass('box_x');
  $('.box_o').removeClass('box_o');
  $(".box").empty();
}

const onGetAllGames = function(e){
  e.preventDefault();
  api.getAllGames()
  .then(ui.getGamesuccess)
  .fail(ui.fail);
};

const onCreateGame = function(event){
  event.preventDefault();
  resetGlobalState();
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
  api.updateGame(data)
    .then(ui.Updatesuccess)
    .fail(ui.fail);
};

const addEventHandlers = () => {
  $( "#create_game" ).on('click', onCreateGame);
  $( "#getAll_Games" ).on('click', onGetAllGames);
};

module.exports = {
  addEventHandlers,
  onGetAllGames,
  onCreateGame,
  onUpdateGame,
  resetGlobalState,

};
