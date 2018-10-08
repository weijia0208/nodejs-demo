#!/usr/bin/node

const Radio = require('./04-radio.js');

const station = {
  freq:'102.4',
  name:'music Radio'
};

var radio = new Radio(station);

radio.on('open',(station)=>{
  console.log('"%s" FM %s opened',station.name,station.freq);
  console.log('lalala...');
});

radio.on('stop',(station)=>{
  console.log('"%s" FM %s closed',station.name,station.freq);
});
