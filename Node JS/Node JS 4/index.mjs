import express from 'express'
import path from 'path'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT
const __dirname = path.resolve()
const names = [
  {name: "Muhammad"},
  {name: "Muhammad2"},
  {name: "Muhammad3"}
]

app.use(express.json())

app.get("/",(req, res) => {
   res.send(names)
})

app.post("/",(req, res) => {
  const name = req.body.name
  names.push({name: name})
  res.send(names)
})

app.put("/",(req, res) => {
  const name = req.body.name
  const index = req.body.index
  names[index] = {name: name}
  res.send(names)
})

app.delete("/",(req, res) => {
  const index = req.body.index
  names.splice(index, 1)
  res.send(names)
})


app.listen(PORT, () => {
    console.log("The app is running on localhost:" + PORT);
})