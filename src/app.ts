import express, { Request, Response } from 'express'
const app = express();



// Routes 

app.get("/",(req:Request,res:Response)=>{
      res.send({
         name:"anchal",
         age:23
      })
})



export default app;
