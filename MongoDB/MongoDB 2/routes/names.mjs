import express from "express"
import Name from '../model/name.mjs'

const router = express.Router()


// Get Api

router.get("/", async(req, res) => {
    const names = await Name.find({})  // Name.find({}) will bring all the data in names
    res.status(200).send(names)
}) 


// Post Api

router.post("/", async(req, res) => {
    const name = req.body.name

    try {
        if (!name) {
            console.log("Missing required params")
            res.send("Missing required params")
        }

        else {
            await Name.create({
                name: name
            })
            const names = await Name.find({})
            res.send(names)
        }
    }

    catch (error) {
        console.log({"Error": error.message, "Status": 500})
        res.status(500).send(error.message)
    }

})


// Delete Api

router.delete("/", async(req, res) => {
    const id = req.body.id

    try {
        if (!id) {
            console.log("Missing required Params")
            res.send("Missing required Params")
        }

        else {
            await Name.findByIdAndDelete(id)
            const names = await Name.find({})
            res.send(names)
        }
    }

    catch (error) {
        console.log({"Error": error.message, "Status": 500})
        res.status(500).send(error.message)
    }

})


// Put Api


router.put("/", async(req, res) => {
    const id = req.body.id
    const name = req.body.name

    try {
        if (!id || !name) {
            console.log("Missing required params")
            res.send("Missing required params")
        }

        else {
           await Name.findByIdAndUpdate(id, {
                name: name
            }, {new: true})
            const names = await Name.find({})
            res.send(names)
        }
    }

    catch (error) {
        console.log({"Error": error.message, "Status": 500})
        res.status(500).send(error.message)
    }

})

export default router