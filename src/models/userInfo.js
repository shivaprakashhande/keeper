const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userName:String,
    eMail:String,
    cell:String,
    password:String,
    confirmPassword:String
})

module.exports=mongoose.model('UserInfo',userSchema);