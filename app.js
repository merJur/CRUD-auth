const express = require ("express")
const logger = require("morgan")
const hbs = require("hbs")

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended:false }))
app.use(logger("dev"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

const router = require("./config/index.routes")
app.use(router)

app.use((err, req, res, next) => {
    res.render ("error"), {err}
})

app.listen(3000, () => console.log("listening on port 3000 🔊!"))