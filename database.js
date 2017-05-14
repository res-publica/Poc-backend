//Sequelize setup code, works is pgsql

var Sequelize = require('sequelize');
let sequelize = new Sequelize('quotedb', 'adrien', '', {
	host: 'localhost',
	port: 5432,
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

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