import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT
console.log(process.env.apiKey)

app.get("/", (req, res) => {
    try {
        RandomVar
        res.status(200).send(
            {
                message: "Everything is working there is no error",
                status: 200
            }
        )
    }

    catch (error) {
        res.status(500).send(
            {
                message: "There is an error",
                Error: error,
                status: 500
            }
        )
    }
})

app.listen(PORT, () => {
    console.log("The server is running on localhost:" + PORT);
})