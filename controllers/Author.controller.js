const Author = require("../models/Author")

console.log("Author Controller")
module.exports = {
    //read ALL --------------------------------------------
    findAll: (req, res) => {
        Author.find()
                .then( allAuthors => {
                    console.log("allAuthors: ", allAuthors);
                    res.json(allAuthors);
                })
                .catch( err => {
                    console.log("read all err: ", err);
                    res.status(400).json(err);
                })
    },
    // READ ONE --------------------------------------------
    findOne: (req, res) => {
        // Author.findById(req.params.id)
        console.log("I am finding this object")
        Author.findOne({_id: req.params.id})
                .then( author => {
                    console.log("author: ", author);
                    res.json(author);
                })
                .catch( err => {
                    console.log("ERROR", err);
                    res.status(400).json(err);
                })
    },

    //CREATE -------------------------------------------------------------------
    create: (req, res) => {
        Author.create(req.body)
                .then(newAuthor => {
                    console.log("created a new author: ", newAuthor);
                    res.json(newAuthor);
                })
                .catch(err => {
                    console.log("ERROR", err);
                    res.status(400).json(err);

                })
    },
    
    //DELETE ----------------------------------------------------------------
    deleteOne: (req, res) => {

        Author.deleteOne({_id: req.params.id})
                .then( result => res.json({result: result}))
                .catch( err => res.status(400).json({message: "ERROR delete", error: err}))
    },

    //UPDATE ------------------------------------------------------------
    findOneAndUpdate: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
                .then( updatedAuthor => {
                    console.log("updatedProduct: ", updatedAuthor);
                    res.json(updatedAuthor);
                })
                .catch(err => {
                    console.log("ERROR", err);
                    res.status(400).json(err);
                })
    },

}