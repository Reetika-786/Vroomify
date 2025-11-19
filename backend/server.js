import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import path from 'path';
import helmet from 'helmet'
import { fileURLToPath } from 'url';


import {connectDB} from './config/db.js'
import userRouter from './routes/userRoutes.js';
import carRouter from './routes/carRoutes.js';

const app = express();
const PORT = 5000;
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

//middleware
app.use(cors());
app.use(
    helmet({
        crossOriginResourcePolicy: {policy: 'cross-origin'},
    })
)
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(
    '/uploads', (req, res, next)=>{
        res.setHeader('Access-Control-Allow-Origin', "*");
        //it sets a CORS header. This allows any frontend to load images/files from your /uploads folder.
        next();
    },
    express.static(path.join(process.cwd(), 'uploads'))
)


//routes
app.use('/api/auth', userRouter);
app.use('/api/cars', carRouter);

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