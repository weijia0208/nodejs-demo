#!/usr/bin/node

const http = require('http'),
      cheerio = require('cheerio');

var addr = 'http://edu.51cto.com/courselist/index-zh5.html';

http.get(addr,(res)=>{
  var html = '';

  res.on('data',(data)=>{
    html +=data;
  });

  res.on('end',()=>{
    var $ = cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName = $(this).find('a').text(),
          cTime = $(this).find('p.fl').text(),
          cTarget = $(this).find('div.course_target').text(),
          cURL = $(this).find('a').attr('href');

      if(cTime === '') return;

      console.log('课程名称：', cName);
      console.log('课时数量：', cTime);
      console.log('课程网址：', cURL.trim());
      console.log('教学目标：', cTarget.trim());
      console.log('');
      
    });
  });
});
