# Poc-backend
Proof of Concept backend app using ExpressJS and Sequelize

# Usage
## Install ExpressJS : 
`npm install express --save`

## Install Sequelize
`npm install sequelize --save`

`npm install --save mysql`

[Sequelize Documentation](http://docs.sequelizejs.com/manual/installation/getting-started)

## Launch backend server
`npm start`

## Configure database
In database.js where: 
```javascript
let sequelize = new Sequelize('glycemia', 'root', 'root', {
	host: 'HOST',
	port: PORT,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});
```
