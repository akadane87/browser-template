'use strict';
//remove signIn and signOut
const app = require('../app.js');

//remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user;
  $( ".gameStat_wrapper" ).show();
  $( "#create_game" ).show();
  $( "#sign-out" ).show();
  console.log(app);
  // debugger;
};

const signOutSuccess = (data) => {
  $( ".gameStat_wrapper" ).hide();
  $( "#create_game" ).hide();
  $( "#sign-out" ).hide();
  console.log(app);
  // debugger;
};

//remove me before code-along
// const signOutSuccess = () => {
//   app.user = null;
//   console.log(app);
// };

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
