"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
if (process.env.NODE_ENV == 'production') {
    var sequelize = new Sequelize(config.uri);
}
else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//model definition, docs : http://docs.sequelizejs.com/manual/tutorial/models-definition.html
exports.Quote = sequelize.define('quotes', {
    message: { type: Sequelize.STRING },
    category: { type: Sequelize.ENUM('stupid', 'dangerous', 'WTF', 'none') },
});
exports.Quote.sync({ force: true }).then(() => {
    return exports.Quote.create({
        message: 'Default quote',
        category: 'none'
    });
});
