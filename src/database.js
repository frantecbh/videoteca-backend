const mongoose = require('mongoose')

function connectToDatabase() {

    mongoose.connect(process.env.URL_DATABASE)

    const db = mongoose.connection;

    db.on("error", (error) => console.log(error))
    db.once("open", () => console.log("Contect on database"))

}


module.exports = connectToDatabase;




