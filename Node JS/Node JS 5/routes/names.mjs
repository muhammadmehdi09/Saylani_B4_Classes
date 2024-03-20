import express from "express"

const router = express.Router()

const names = [
    { name: "Mehdi" },
    { name: "Shehryar" },
    { name: "Obaid" }
]


// Get Api


app.get("/", (req, res) => {
    let names_div = ""
    for (const name of names) {
        names_div = names_div + `<h1>${name.name}</h1>`
    }
    res.send(names_div)
}) 


// Post Api


app.post("/", (req, res) => {
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


// Delete Api


app.delete("/:id", (req, res) => {
    const id = req.params.id

    try {
        if (!id) {
            console.log("Missing required Params")
            res.send("Missing required Params")
        }

        if (!names[id - 1]) { // Id - 1 will give us index number
            console.log("Missing Item")
            res.send("Missing Item")
        }

        else {
            names.splice((id-1), 1) // This will delete the object at that index
            res.send(names)
        }
    }

    catch (error) {
        console.log({"Error": error.message, "Status": 500})
        res.status(500).send(error.message)
    }

})


// Put Api


app.put("/:id", (req, res) => {
    const id = req.params.id
    const name = req.body.name

    try {
        if (!id || !name) {
            console.log("Missing required Params")
            res.send("Missing required Params")
        }

        if (!names[id - 1]) { // Id - 1 will give us index number
            console.log("Missing Item")
            res.send("Missing Item")
        }

        else {
            names[id-1] = {name: `${name}`}
            res.send(names)
        }
    }

    catch (error) {
        console.log({"Error": error.message, "Status": 500})
        res.status(500).send(error.message)
    }

})

export default router