import express from 'express'
import path from 'path'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT
const __dirname = path.resolve()

app.use(express.static('public'))

app.get("/about",(req, res) => {
  try {
    res.status(200).sendFile(path.resolve(__dirname,'public/about.html'))
  } 
  
  catch (error) {
    res.status(500).send({
      error: error.message,
      status: "Error"
    })
  }
})

app.get("*",(req, res) => {
  res.status(200).sendFile(path.resolve(__dirname,'public/404.html'))
})

app.listen(PORT, () => {
    console.log("The app is running on localhost:" + PORT);
})