#!/usr/bin/env node
 const chalk = require('chalk');
const log = console.log;
var stdin = process.openStdin();

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question(`What's your name? = `,(name) => {
  log(chalk.green(`Hi ${name}!`));
  readline.close()
})
