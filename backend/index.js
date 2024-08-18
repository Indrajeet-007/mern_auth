import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

try {
        mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected to database");
} catch (error) {
        console.error(error.message);
}


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
});

app.post('/check', (req, res) =>{
});

app.listen(port ,()=>{ 
console.log('Server running on port '  + port);
});