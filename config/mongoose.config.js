const mongoose = require("mongoose");
const DB = "author_db"

mongoose.connect("mongodb://localhost/" + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
} )
.then( () => console.log("DB connected at author_db"))
.catch( (err) => console.log("Something went wrong", err));