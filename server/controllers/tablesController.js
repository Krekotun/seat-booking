const lowdb = require('lowdb')
const uniqid = require('uniqid')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const adapter = new FileSync(path.resolve(__dirname, '../db/db.json'))
const db = lowdb(adapter)

db
	.defaults({
		tables: []
	})
	.write()


module.exports = {
	list: (req, res) => {
		res.status(203).json(req.query)
	},

	save_table: (req, res) => {
		const tables = db
			.get('tables')
			.push({
				"id": uniqid(),
				"hola": 12
			})
			.write()

		res.status(203).json({tables: 'tables'})
	}
}

