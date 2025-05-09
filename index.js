import express from "express"

const app = express()
const PORT  = 1850
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})