'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

//User object constructor 
var User = function(user){
    this.id = user.id;
    this.nombre = user.nombre;
    this.localidad = user.localidad;
    this.edad = user.edad;

};

Task.createTask = function (newTask, result) {    
        sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Task.createUser = function (id,nombre,localidad,edad, result) {    
    console.log("try to create a user");
    const query ="INSERT INTO USUARIO VALUES(?,?,?,?)";
    console.log(query);
    sql.query(query, [id,nombre,localidad,edad], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log("ok");
                result(null, res.insertId);
            }
        });           
};
Task.createEvent = function (id,titulo,fecha,deporte,capacidad,id_usuario,id_localizacion, result) {    
    console.log("try to create a user");
    const query ="INSERT INTO eventos VALUES(?,?,?,?,?,?,?)";
    console.log(query);
    sql.query(query, [id,titulo,fecha,deporte,capacidad,id_usuario,id_localizacion], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log("ok");
                result(null, res.insertId);
            }
        });           
};
Task.createParticipante = function (id_evento,id_usuario, result) {    
    console.log("try to create a user");
    const query ="INSERT INTO participantes VALUES(?,?)";
    console.log(query);
    sql.query(query, [id_evento,id_usuario], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log("ok");
                result(null, res.insertId);
            }
        });           
};





Task.getTaskById = function (taskId, result) {
        sql.query("Select * from usuario where id = ? ", taskId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Task.getAllTask = function (result) {
        sql.query("Select * from eventos", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('usuario : ', res);  

                 result(null, res);
                }
            });   
};
Task.getAllParticipantes = function (result) {
    sql.query("Select * from participantes", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('usuario : ', res);  

             result(null, res);
            }
        });   
};
Task.getAllUsers = function (result) {
    sql.query("Select * from usuario", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('usuario : ', res);  

             result(null, res);
            }
        });   
};
Task.updateById = function(id, task, result){
  sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Task.remove = function(id, result){
     sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};
sql.on('error', function(err) {
    console.log("[mysql error]",err);
});
module.exports= Task;