import express from 'express'

const PORT = 5500
const app = express()
const names = [
    { name: "Mehdi" },
    { name: "Shehryar" },
    { name: "Obaid" }
]

app.use(express.json())

app.get("/names", (req, res) => {
    let names_div = ""
    for (const name of names) {
        names_div = names_div + `<h1>${name.name}</h1>`
    }
    res.send(names_div)
}) 

app.post("/names", (req, res) => {
    const body = req.body

    try {
        if (names.some(object => object.name === body.name)) {
            console.log("Name is already used")
            res.send("Name is already used")
        }

        else {
            names.push({ name: body.name })
            console.log(body.name)
            res.send("Working")
        }
    }

    catch (error) {
        console.log({"Error": error.message, "Status": 500})
        res.status(500).send(error.message)
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})
