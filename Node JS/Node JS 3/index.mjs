import express from "express";
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT

app.get("/", (req, res) => {
    try {
        someVariable
        res.status(200).send({
            message: "All is Working",
            status: "Success"
        })
    }
    catch (error) {
        res.status(500).send({
            message: "Something went wrong",
            status: "Error"
        })
    }
})

app.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT)
})