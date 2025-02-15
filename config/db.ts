import mongoose from "mongoose"
import { config } from "./config"

const connectDB = async()=>{
   try {

      // event register 
      mongoose.connection.on('connected',()=>{
          console.log("mongodb connected successfully");
      })

     mongoose.connection.on('error',(err)=>{
         console.log(`Error connecting database ${err}`)
     }) 

     await mongoose.connect(config.mongo_url as string)

   } catch (error) {
      console.log(error) 
      process.exit(1);
   }  
}

export default connectDB;