'use strict'


module.exports = {
	listItems(req, res) {
		let list = ["1, 2, 3"]
		res.json(list)
	},
	showItem(req, res) {
		let id = req.params.id
		res.json({
			id: id
		})
	}
}