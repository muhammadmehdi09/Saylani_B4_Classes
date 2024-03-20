import express from 'express'
import names from './routes/names.mjs'

const PORT = 5500
const app = express()

app.use(express.json())
app.use("/", names)

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
})
