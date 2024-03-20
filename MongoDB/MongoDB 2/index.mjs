import express from 'express'
import names from './routes/names.mjs'
import connectDB from './database/main.mjs'

const PORT = 5500
const app = express()
connectDB()

app.use(express.json())
app.use("/", names)

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})
