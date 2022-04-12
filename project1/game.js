"use strict";
exports.__esModule = true;
//const readlineSync = require('readline-sync');
var readline_sync_1 = require("readline-sync");
//const chalk = require('chalk');
var chalk_1 = require("chalk");
var log = console.log;
var user, pw, command;
log(chalk_1["default"].black.bold.bgYellow('    Your Account    '));
user = readline_sync_1["default"].question(chalk_1["default"].gray.underline(' USER NAME ') + ' : ');
pw = readline_sync_1["default"].question(chalk_1["default"].gray.underline(' PASSWORD  ') + ' : ', { hideEchoBack: true });
// Authorization ...
log(chalk_1["default"].green('Welcome, ' + user + '!'));
command = readline_sync_1["default"].prompt();
