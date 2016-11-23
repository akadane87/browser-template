'use strict';
//remove signIn and signOut
const app = require('../app.js');

//remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user;
  $( ".gameStat_wrapper" ).show();
  $( "#create_game" ).show();
  $( "#sign-out" ).show();

  $( "#sign-up-btn" ).hide();
  $( "#sign-in-btn" ).hide();
  $( "#change-password" ).show();
  $("#modal-2").modal('hide');
};

const signOutSuccess = (data) => {
  $( ".gameStat_wrapper" ).hide();
  $( "#create_game" ).hide();
  $( "#sign-out" ).hide();

  $( "#sign-up-btn" ).show();
  $( "#sign-in-btn" ).show();
  $( "#change-password" ).hide();
  $("#modal-2").modal('hide');

};

const changePasswordSuccess = () => {
  $("#modal-3").modal('hide');
};

const success = (data) => {
  $("#modal-1").modal('hide');
  $( "#change-password" ).show();
  $( "#sign-up-btn" ).hide();
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
