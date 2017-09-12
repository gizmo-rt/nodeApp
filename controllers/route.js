/**
 * Created by pawan on 11/9/17.
 */

var Todos = require('../models/todoModel');


module.exports = function (app) {

    app.get('/api/setup-task', function (req, res) {

        var data = [
            {
                user: "John",
                task: "Prepare breakfast",
                is_done: "true",
                has_attachment: "false"
            },
            {
                user: "Doe",
                task: "Clean house",
                is_done: "false",
                has_attachment: "false"
            },
            {
                user: "Charlie",
                task: "Attend Meetings",
                is_done: "false",
                has_attachment: "false"
            }
        ];
        Todos.create(data, function (err, result) {
            res.send(result);
        })
    });

}
