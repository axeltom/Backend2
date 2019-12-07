'use strict';

var Task = require('../model/appModel.js');
var User = require('../model/appModel.js');


exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  const{id,nombre,localidad,edad} = req.body;
  console.log("El id es:"+id);
  console.log("El nombre es:"+nombre);
  console.log("la localidad es:"+localidad);
  console.log("la edad es:"+edad);
  //handles null error 
   if(!id || !nombre){

            res.status(400).send({ error:true, message: 'Please provide all parameters' });

        }
   else{
    Task.createUser(id,nombre,localidad,edad, function(err, task) {     
      if (err)
        res.send(err);
        res.json(task);
    });
  }
};

exports.create_a_event = function(req, res) {
  const{id,titulo,fecha,deporte,capacidad,id_usuario,id_localizacion} = req.body;
  console.log("El id es:"+id);
  console.log("El nombre es:"+titulo);
  console.log("la localidad es:"+fecha);
  console.log("la edad es:"+deporte);
  //handles null error 
   if(!id || !titulo){

      res.status(400).send({ error:true, message: 'Please provide all parameters' });

   }
  else{
    
    Task.createEvent(id,titulo,fecha,deporte,capacidad,id_usuario,id_localizacion, function(err, task) {
      
      if (err)
        res.send(err);
        res.json(task);
    });
  }
};
exports.create_a_participante = function(req, res) {
  const{id_evento,id_usuario} = req.body;
  console.log("El id es:"+id_evento);
  console.log("El id-u es:"+id_usuario);
  //handles null error 
   if(!id_evento || !id_usuario){

      res.status(400).send({ error:true, message: 'Please provide all parameters' });

   }
  else{
    
    Task.createParticipante(id_evento,id_usuario, function(err, task) {
      
      if (err)
        res.send(err);
        res.json(task);
    });
  }
};
exports.list_all_users = function(req, res) {
  Task.getAllUsers(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};
exports.list_all_participantes = function(req, res) {
  Task.getAllParticipantes(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};





exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};