import express from "express"
import path from "path"


const __dirname = path.resolve()

const app = express()
const PORT = 5500

app.use((req, res, next) => {
    console.log(123)
    next()
})


app.use(express.static("public"))

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/about.html"))
})

app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/404.html"))
});


app.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT);
})