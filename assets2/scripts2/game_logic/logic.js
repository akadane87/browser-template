'use strict';



const glowBall = require('./global.js');
const events_game = require('../game_api/events_game.js');

const turnCount = function () {
  return glowBall.vars.board.length;
};
// turnCount();

let gb = glowBall.vars.board;

// gb.filter(e => e !== "").length % 2 === 0 ? 'x':'o';
// gameboard -> filter out empty spaces to determine how many turns have been played
// if number of moves is even - it is 'x'  otherwise - 'o'
const gameWins = function () {
  let turn = gb.filter(e => e !== "").length % 2 === 0 ? 'x':'o';

  gb = glowBall.vars.board;
  if ((gb[0] === gb[1] && gb[2] === gb[0] && !!gb[0]) || // HORIZONTAL WINS
  (gb[3] === gb[4] && gb[5] === gb[3] && !!gb[3]) || // HORIZONTAL WINS
  (gb[6] === gb[7] && gb[8] === gb[6] && !!gb[6]) || // HORIZONTAL WINS

  (gb[0] === gb[3] && gb[6] === gb[0] && !!gb[0]) || // VERTICAL WINS
  (gb[1] === gb[4] && gb[7] === gb[1] && !!gb[1]) || // VERTICAL WINS
  (gb[2] === gb[5] && gb[8] === gb[2] && !!gb[2]) || // VERTICAL WINS

  (gb[0] === gb[4] && gb[8] === gb[0] && !!gb[0]) || // DIAGNOL WINS
  (gb[6] === gb[4] && gb[2] === gb[6] && !!gb[6])) { // DIAGNOL WINS
    // Tests for win conditions and then determines whose turn it is
    // $(`#modal_{turn.toUpperCase()}wins`).modal('show');
    if (turn == "o") {
      $('#modal_Xwins').modal('show');
      glowBall.vars.gameOver = true;
      $('#game_board').hide();
    }
    if (turn == "x") {
      $('#modal_Owins').modal('show');
      glowBall.vars.gameOver = true;
      $('#game_board').hide();
    }

    } else if (gb.filter(e => e !== "").length === 9) {
      $('#modal_Tie').modal('show');
      glowBall.vars.gameOver = true;
      $('#game_board').hide();
    }
};

function getTurn(cells) {
  return (cells.filter(e => e !== "").length % 2 === 0)
    ? "x"
    : "o";
}

const onClick = function (event) {
  event.preventDefault();
  // if the target of the click (event.target) (the element that received the click)
  // is not emptyu - dont do anything
  if ($(event.target).html() !== "") {
    return;
  }
  //  getTurn is a fucntion that translates the state of the game cells to either
   // "x" or "o" depending on how many moves have been performed
  let turn = getTurn(glowBall.vars.board);
  //
  let box = $(this).attr('id'); // plugs in id and returns string

  let boxId = '#' + box; // ads # to previous id defintion

  let i = +(box.replace(/\D/g, '')); // removes letters from string & +returns integer

// this  adds either 'box_x' or 'box_o' class to the clicked ID depending on the
// the turn
  $(boxId).addClass(`box_${turn}`);


  $(boxId).html(turn.toUpperCase()); // if xTurn is boolean anything else (false), put 'O' in boxId

  glowBall.vars.board[i] = turn; // add value of 'o' to array   // but currently xTurn is always true, so how do we make it false?

  glowBall.vars.boardValue = turn; // not the index but the value to be targeted and appended into data

  events_game.onUpdateGame();

  // glowBall.vars.turnCount = i++ ;

  gameWins();

  // Switches turns between X and O
  // glowBall.vars.xTurn = !glowBall.vars.xTurn; // gives xTurn the opposite boolean value (which is now false) making previous else statement work

  console.table(glowBall.vars.board);

};

function resetGlobalState() {
  let fresh = new Array(9);
  glowBall.vars.board = fresh.fill("");
  $('.box_x').removeClass('box_x');
  $('.box_o').removeClass('box_o');
}

const addHandlers = () => {
  //Game Board Click Events
  // $('#box0').on('click', onClick);
  // $('#box1').on('click', onClick);
  // $('#box2').on('click', onClick);
  // $('#box3').on('click', onClick);
  // $('#box4').on('click', onClick);
  // $('#box5').on('click', onClick);
  // $('#box6').on('click', onClick);
  // $('#box7').on('click', onClick);
  // $('#box8').on('click', onClick);
  // $('#game_board').hide();
  $('.box').on('click', onClick);


  };

module.exports = {
  addHandlers,
  resetGlobalState,

};
