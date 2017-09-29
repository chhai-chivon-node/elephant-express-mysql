/*MySql connection*/
var express = require('express');
var connection  = require('express-myconnection'),mysql = require('mysql');
module.exports = connection(mysql,{
          host     : 'localhost',
          user     : 'root',
          password : '',
          database : 'elephant-express-mysql',
          debug    : false //set true if you wanna see debug logger
      },'request');
