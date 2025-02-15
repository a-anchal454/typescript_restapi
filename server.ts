import { config } from "./config/config";
import connectDB from "./config/db";
import app from "./src/app"


const server = async()=>{
    const port=config.port;
    await connectDB();
    
    app.listen(port,()=>{
         console.log("Listing at port",config.port)
    })  
}

server()