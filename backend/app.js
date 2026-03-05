import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path';



const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.get('/api/movies', async (req, res) => {
    try {
        const dataPath = path.join('./data/data.JSON')
        const data = fs.readFileSync(dataPath, 'utf-8')
        const movies = json.Parse(data)
        // console.log(movies);

        res.json(movies)
        console.log(movies)
    } catch (err) {
        res.status(500).json({error: 'error in fetch'})
        console.log("error", err)
    }
})

app.listen(port, () => {
    console.log(`server run ${port}`)
})