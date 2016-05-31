/**
 * Created by pc on 2016/5/23.
 */
var express = require('express');
var Sequelize = require('sequelize');
var app = express();
var config = require("./config//databaseConfig").databaseConfig;

app.use(express.static(__dirname+'/public'));


var sequelize = new Sequelize(config.DATABASE_CONFIG.database, config.DATABASE_CONFIG.userName, config.DATABASE_CONFIG.password, {
    host : config.DATABASE_CONFIG.host ,
    port : config.DATABASE_CONFIG.port ,
    dialect : config.DATABASE_CONFIG.dialect

});

var User = sequelize.define('user_ss', {
    userId: { type: Sequelize.INTEGER,  field: 'user_id', primaryKey: true},
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
    }
}, {
    freezeTableName: true ,// Model tableName will be the same as the model name
    plural: 'user_test',
    createdAt: false,  // 默认true,false 为表没有该字段
    updatedAt: false  // 默认true,false 为表没有该字段
});

User.sync({force: false})  //If force is true, each DAO will do DROP TABLE IF EXISTS ..., before it tries to create its own table
    .then(function () {
    // Table created
    return User.create({
        userId: 1,
        firstName: 'Johzvszvddfadsfnvdsfbvsdfbv',
        lastName: 'Hancocczvczadsfadfvksfvgsbfvsdbsdbs'
    });
});
//
/*User.findOne().then(function (user) {
    console.log(user.get('first_name'));
});*/
app.listen(8888);
