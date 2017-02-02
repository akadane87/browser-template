'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game_api/events_game.js');
const logicEvents = require('./game_logic/logic.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  logicEvents.addHandlers();
  gameEvents.addEventHandlers();
  $('#game_board').hide();
  $( ".gameStat_wrapper" ).hide();
  $( "#create_game" ).hide();
  $( "#sign-out" ).hide();
  $( "#sign-out" ).hide();
  $( "#change-password" ).hide();
});
