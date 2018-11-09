const express = require('express');
const projectsRouter = require('');
const actionsRouter = require('');
const server = express();

server.use(express.json());

server.use('', projectsRouter);
server.use('', actionsRouter);

module.exports = server;