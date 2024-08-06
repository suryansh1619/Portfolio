const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified('password')) return next();
    try{
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(user.password,salt)
        user.password=hashpassword;
        next();
    }
    catch(err){
        return next(err);
    }
})
userSchema.methods.comparePassword=async function(password){
    try{
        const isMatch=await bcrypt.compare(password,this.password)
        return isMatch;
    }
    catch(err){
        throw err
    }
}

const User=mongoose.model('User',userSchema);
module.exports=User;