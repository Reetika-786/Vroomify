import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'

const app = express();
const PORT = 5000;
dotenv.config();

connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routes

//listen
app.get('/', (req, res) => {
    res.send('api working')
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})