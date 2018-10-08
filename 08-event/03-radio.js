#!/usr/bin/node

const util = require('util'),
      EventEmitter = require('events').EventEmitter;

function Radio(station) {
  EventEmitter.call(this);

  var self = this;

  setTimeout(() => {
    self.emit('open',station);
  },0);

  setTimeout(() => {
    self.emit('stop',station);
  },500);
}
util.inherits(Radio,EventEmitter);

  module.exports = Radio;
