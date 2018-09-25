#!/usr/bin/node

function circle(radius){
  return {
    diameter:function(){return 2*radius},
    circumference:function(){return 2*radius*Math.PI},
    area:function(){return radius*radius*Math.PI}
  }
}
module.exports = circle;
