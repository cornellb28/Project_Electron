import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import TrackRoute from './routes/TrackRoute.js';
import PlaylistRoute from './routes/PlaylistRoute.js';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(TrackRoute);
app.use(PlaylistRoute);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running......")
})