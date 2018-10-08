#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function Radio(station) {
  var that = this;

  for(var m in EventEmitter.prototype){
    this[m] = EventEmitter.prototype[m];
  }

  setTimeout(() => {
    that.emit('open',station);
  },0);

  setTimeout(() => {
    that.emit('stop',station);
  },500);
}

  module.exports = Radio;
