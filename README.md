# Tasker

Tasker is a work scheduler app designed that allows its users to create their own todo list.
The app exposes 4 REST APIs for this purpose. 
Its designed using NodeJS, ExpressJS and MongoDB.

## Installation

1. Clone repository
2. Run following command

    `npm install`
3. Start server using following.

    `node app.js`

## APIs

  - `GET /api/todos/:uname`
  - `GET /api/todo/:id`
  - `POST /api/todo`
  - `DELETE /api/todo`

## Plugins
 
 - body-parser
 - ejs
 - express
 - mongoose
 - morgan
 - path
 - rotating-file-stream
