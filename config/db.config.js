const mongoose = require("mongoose")

const MONGODB_URI = 
process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/CRUD-auth"

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then((x) => {
        console.log(`connected to DB at ${MONGODB_URI}`)
    })
    .catch((err) => { 
        console.error(`error connecting to ${MONGODB_URI}`, err)

        process.exit(0)
    })

process.on("SIGINT", function () {
    mongoose.connection.close(function() {
        console.log("mongoose disconnected on app termination")
        process.exit(0)
    })
})

module.exports.DB = MONGODB_URI