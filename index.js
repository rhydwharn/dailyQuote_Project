import express from "express"
import quotesRouter from "./routes/quotes.js"

const app = express()
const PORT  = 1850
app.use(express.json())

app.use('/api/quotes', quotesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})