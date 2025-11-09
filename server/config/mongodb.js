import mongoose from "mongoose";


const connectDb = async () => {

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected");
    }).on('error',(err)=>{
        console.log("Database Connection Failed", err);
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);   
}

export default connectDb