'use strict';

const api = require('./api_game.js');
const ui = require('./ui_game.js');
const app = require('assets2/scripts2/app.js');

const onGetAllGames = function(event){
  event.preventDefault();
  api.getAllGames()
  .then(ui.getGamesuccess)
  .fail(ui.fail);
};

const onCreateGame = function(event){
  event.preventDefault();
  api.CreateGame()
  .then(ui.getGamesuccess)
  .fail(ui.fail);
};

const onUpdateGame = function(event){
  let data = {
    "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
      "over": false
  }
};
    api.updateGame(data)
    .then(ui.Updatesuccess)
    .fail(ui.fail);
};



module.exports = {
  addEventHandlers,
  onGetAllGames,
  onCreateGame,
  onUpdateGame,
};
