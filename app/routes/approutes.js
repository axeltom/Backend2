'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController');


  //
  app.route('/participantes')
  .get(todoList.list_all_participantes)
  .post(todoList.create_a_participante);
  app.route('/users')
  .get(todoList.list_all_users)
  .post(todoList.create_a_user);
  // todoList Routes
  app.route('/eventos')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_event);
   
   app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    };