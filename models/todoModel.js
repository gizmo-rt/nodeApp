/**
 * Created by pawan on 11/9/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    user: String,
    task: String,
    is_done: Boolean,
    has_attachment: Boolean
});

var Task = mongoose.model('Task',todoSchema);

module.exports = Task;
