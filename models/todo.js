var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = rewuire('body-parser');

var indexRouter = require('./routes/index');
var indexTodo = require('./routes/todo');

var app = express();

// view engine set up

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(loger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname)))