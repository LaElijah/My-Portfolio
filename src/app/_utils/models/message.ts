import mongoose from "mongoose";

const { Schema } = mongoose

const messageSchema = new Schema({  
    name: String,
    email: String,  
    message: String,

})


export default mongoose.models.Message || mongoose.model('Message', messageSchema)