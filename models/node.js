var mongoose    =   require("mongoose");
//mongoose.connect('mongodb://localhost:27017/ppc');
// create instance of Schema
var Schema =   mongoose.Schema;

//create Node schema
var nodeSchema = new Schema({
	tree_id: Schema.Types.ObjectId,
	seq_number: Number,
	name: String,
	level: Number,
	attributes: Array,
	edge: {
		"idEdge": Number,
		"attributes": Array
	},
	ancestors: Array
})


// create model if not exists.
var Node = mongoose.model('Node', nodeSchema);

// make this available to our users in our Node applications
module.exports = Node;

// CREATE TREE
module.exports.createNode = function(nodo, callback){
	//Node.create(nodo, callback)

	//INSERT() is faster than create
	Node.collection.insert(nodo, callback)
}

// GET NODE BY SEQ NUMBER
module.exports.getNodeByNumber = function(query, callback){
	Node.findOne({
		seq_number: query.num,
		tree_id: query.tree 
	}, callback)
}

// GET NODE BY NAME
module.exports.getNodeByName = function(query, callback){
	Node.findOne({
		name: "Vertex_"+query.name,
		tree_id: query.name
	}, callback)
}

// GET NODE BY ID
module.exports.getNodeById = function(id, callback){
	Node.findById(id, callback)
}