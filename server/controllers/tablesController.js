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
		const gameId = req.query.gameId
		const tables = db
			.get('tables')
			.filter(table => +table.gameId === +gameId)
			.value()

		res.status(200).json({ tables })
	},

	save_table: (req, res) => {
		const gameId = req.body.gameId

		const tables = db
			.get('tables')
			.push(req.body)
			.filter(table => +table.gameId === +gameId)
			.write()

		res.status(200).json({tables})
	}
}

