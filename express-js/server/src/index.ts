import express, { text } from "express";
import cors from "cors";
const app = express();
const PORT:number = 8080;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.listen(
    PORT,
    ()=>console.log(`It's alive on http://localhost:${PORT}/`)
);

app.post('/contact',(req,res)=>{
    const {name,email,message}:{name:string,email:string,message:string} = req.body;
    console.log(name,email,message);
    res.sendStatus(200);
});

app.set('view engine','ejs');

