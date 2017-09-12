/**
 * Created by pawan on 11/9/17.
 */
var configValues = require('./config');

module.exports = {

    getDbConnectionString:function () {
      return 'mongodb://'+configValues.uname+':'+configValues.pass+'@ds133104.mlab.com:33104/todo_app';
    }
};