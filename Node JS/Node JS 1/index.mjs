import express from 'express'

const app = express()
const PORT = 5500

// app.use(express.static('public'))

app.get("/",(req, res) => {
  res.status(200).send({
    name: "Coding Verse",
    id: "12345",
    status: "Working"
  })
})

app.listen(PORT, () => {
    console.log("The app is running on localhost:" + PORT);
})