import express from 'express' // Import express
import { readFile } from 'fs/promises' //We need to read the file using fs [File System]

const router = express.Router()

const loadQuotesFromJsonFile = async () => {
    const data = await readFile('./data/quotes.json', 'utf-8') // Read from file asyncronously
    return JSON.parse(data) //Parse the json file to a human readable format
}

router.get("/", async (req, res) => {
    try {

        const qoutes = await loadQuotesFromJsonFile();
        // We need math.random to randomly get qoutes
        // Math.floor will take it to nearest interger number
        // We are generating random number and multiplying by the length of the qoutes in the quotes.json file, when you do that you might be getting something like. 3.0123, so in that case we have to floor it to the nearest integer number which will be -> 3
        const randomIndex = Math.floor(Math.random() * qoutes.length); // The number is already saved here which is 3.
        res.json({ qoute: qoutes[randomIndex] }); // Our data are in array and arrays are zero based in format, so it will bring from index 3, meaning that the number will be randomly picked each time that you are sending the request. to the server.
    } catch (error) {
        res.status(500).json({ error: "Failed to load qoutes or Qoute." })
    }
});


export default router