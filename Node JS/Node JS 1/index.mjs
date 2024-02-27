import express from "express"

const app = express()
const PORT = 5500

app.use(express.static("public"))

app.use((req, res) => {
    res.status(200).send({
        message: "Hello Node JS"
    })
})

app.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT);
})