//Sequelize setup code, works is pgsql

var Sequelize = require('sequelize');
let sequelize = new Sequelize('glycemia', 'root', 'root', {
	host: 'localhost',
	port: 8889,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

//model definition, docs : http://docs.sequelizejs.com/manual/tutorial/models-definition.html
var Quote = sequelize.define('quotes', {
	message: { type: Sequelize.STRING },
	category: {type: Sequelize.ENUM('stupid', 'dangerous', 'WTF') },
});

Quote.sync({force: true}).then(() => {
	return Quote.create({
		message: 'Default quote',
		category: 'stupid'
	});
});

exports.Quote = Quote