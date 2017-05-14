//Sequelize setup code, works is pgsql

var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/config/config.json')[env];
var db        = {};

console.log("URI : " + process.env[config.use_env_variable]);
if (config.use_env_variable) {
	console.log("URI : " + process.env[config.use_env_variable]);
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// let sequelize = new Sequelize('quotedb', 'adrien', '', {
// 	host: 'localhost',
// 	port: 5432,
// 	dialect: 'postgres',
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 10000
// 	}
// });

//model definition, docs : http://docs.sequelizejs.com/manual/tutorial/models-definition.html
var Quote = sequelize.define('quotes', {
	message: { type: Sequelize.STRING },
	category: {type: Sequelize.ENUM('stupid', 'dangerous', 'WTF', 'none') },
});

Quote.sync({force: true}).then(() => {
	return Quote.create({
		message: 'Default quote',
		category: 'none'
	});
});

exports.Quote = Quote