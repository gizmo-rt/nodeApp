/**
 * Created by pawan on 12/9/17.
 */

var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todos/:uname', function (req, res) {
        Todos.find({user: req.params.uname}, function (err, todos) {
            if (err)
                throw err;

            res.send(todos);
        });
    });

    app.get('/api/todo/:id', function (req, res) {
        Todos.findById({_id: req.params.id}, function (err, todo) {
            if (err)
                throw err;

            res.send(todo);
        });
    });

    app.post('/api/todo', function (req, res) {

        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                task: req.body.task,
                is_done: req.body.is_done,
                has_attachment: req.body.has_attachment
            }, function (err) {
                if (err)
                    throw err;

                res.send("Success");
            });
        } else {
            var newTodo = Todos({
                user: "Johnny",
                task: req.body.task,
                is_done: req.body.is_done,
                has_attachment: req.body.has_attachment
            });

            newTodo.save(function (err) {
                if (err)
                    throw err;
                res.send("Success");
            });
        }

    });

    app.delete('/api/todo', function (req, res) {
        Todos.findByIdAndRemove(request.body.id, function (err) {
            if (err)
                throw err;
            res.send("Success");
        })
    });
}