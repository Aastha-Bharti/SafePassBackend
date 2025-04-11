import express, { Request, Response } from 'express';
import cors from 'cors';
import passwordRouter from './router/passwordRouter';

const app = express()
app.use(express.json())
app.use(cors());

app.get("/" , async (req : Request ,res : Response) => {
    res.send("hello")
    
})

app.use("/password" , passwordRouter)

app.listen(3000, () => {
    console.log("working")
})