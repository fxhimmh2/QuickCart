import mongoose from "mongoose";

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
    _id:{ type: String, required:true},
    name:{ type: String, required:true},
    email:{ type: String, required:true, unique:true },
    imageUrl:{ type: String, required:true},
    cartItems:{ type: Object, default: {} }
}, {minimize: false })
=======
const userSchema = new mongoose.Schema ({
    _id:{ type : String, required:true},
    name: { type : String, required:true},
    email: { type : String, required:true, unique:true },
    imageUrl: { type : String, required:true},
    cartItems: { type : Object, default : {}}
}, {minimize:false })
>>>>>>> 12bc9695e2b1dbe74023db9cccda84ed0a16594a

const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User
