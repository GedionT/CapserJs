// module.exports = function Capser(string){

function Capser(string){
const chalk = require('chalk');

string.split('');

for(var i=0; i<string.length;i++){

	if((i=0) || (string[i-1] == ' '))
	{
		chalk.green(string[i].toUpper());
	}

}

}

Capser("gedion teshome");