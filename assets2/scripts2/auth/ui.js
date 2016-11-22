'use strict';
//remove signIn and signOut
const app = require('../app.js');

//remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user;
  $( ".gameStat_wrapper" ).show();
  $( "#create_game" ).show();
  $( "#sign-out" ).show();
};

const signOutSuccess = (data) => {
  $( ".gameStat_wrapper" ).hide();
  $( "#create_game" ).hide();
  $( "#sign-out" ).hide();
};

const changePasswordSuccess = () => {
};

const success = (data) => {
};

const failure = (error) => {
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
