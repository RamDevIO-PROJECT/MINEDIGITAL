const mineflayer = require('mineflayer');
const fs         = require('fs');
const rawdata    = fs.readFileSync('config.json');
const data       = JSON.parse(rawdata);
const host       = data["ip"];
const port       = data["port"];
const username   = data["username"];

const minedigital = mineflayer.createBot({ host: host, port: port, username: username });

minedigital.on('login',function(){
	console.log("MINEDIGITAL Ready")
	minedigital.chat("hello");
});

minedigital.on('spawn',function() {
  minedigital.chat("hello im back");
});

minedigital.on('death',function() {
  minedigital.emit("respawn")
});

