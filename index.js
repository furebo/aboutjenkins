import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const port = process.env.PORT || 3000


app.listen(3000,()=>console.log(`app listing on port 3000 ${port}.`));