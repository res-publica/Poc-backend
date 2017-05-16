# Poc-backend
Proof of Concept backend app using ExpressJS and Sequelize

# Usage
## Install Dependencies : 
`npm install`

## Install Gulp pachakge manager globally
`npm install -g gulp`

## Run Gulp commands
`gulp scripts`

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

