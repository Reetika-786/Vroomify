import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import userModel from './models/userModel.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const PORT = 5000;
dotenv.config();

connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routes

app.use('/api/auth', userRouter);

//ping (health check endpoint)
app.get('/api/ping', (req, res) => res.json({
    ok: true,  //Just a flag to say everything is fine.
    time : Date.now() //Sends the current timestamp so the client knows the server is alive right now.
}));


//listen
app.get('/', (req, res) => {
    res.send('api working')
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})