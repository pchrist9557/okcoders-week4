var mongoose = require ('mongoose');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');
var db = mongoose.connection;

db.on('error', function(msg) {
    console.log("MongooseL Unable to connect to database." + msg);

});

db.once('open'), function() {
   console.log("Mongoose connected todo database");
});

var Todo = require('../models/todo');

router.get('/all', function(reg, res) {
    Todo.find({}).exec(function(err, tasks){
        if(err) {
            console.log("Error getting tasks from todo database");
            res.status(404);
        } else {
          res.json(tasks);
        }
    });    
});

router.post('/add', function( req, res){
    var task = new Todo(req.body);
    task.save(function(err, results){
        if(err) {
            console.log("Error saving new todo" + req.body);
            res.status(404);
        } else {
            res.status(201).json({status:"Task Added"});
        }
    });
});

router.put('/update/:id', function(reg, res){
    Todo.updateOne(_id: req.params.id), req.body, function(err, res){
        if(err){
            console.log("Unable to make update to" + req.params.id);
            console.log("JSON Body: " + req.body);
            res.status(404);
        } else {
            res.json({status:"SUCCESS"});
        }
    })
});

router.delete('/:id', function(req, res){
    Todo.deleteOne({}, function(err){
        if(err){
            console.log("Unable to delete from todo" + req.params.id);
            req.status(404);
        } else {
            res.json({status:"TASK" + req.params.id + "marked complete"});
        }
    })
});

module.exports = router;