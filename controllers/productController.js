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
	},
	saveItem(req, res){
		console.log("saving item, body=",req.body)
	},
	updateItem(req, res){
		console.log("updating id", req.params.id)
		console.log("updating item, body=", req.body)
	},
	deleteItem(req, res){
		console.log("deleting id", req.params.id)
	}
}