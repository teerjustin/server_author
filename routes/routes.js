const Author = require("../controllers/Author.controller");

module.exports = (app) => {

    app.get("/api/authors", Author.findAll);
    app.get("/api/authors/:id", Author.findOne);

    app.post("/api/authors", Author.create);

    app.put("/api/authors/:id", Author.findOneAndUpdate);

    app.delete("/api/authors/:id", Author.deleteOne);
}