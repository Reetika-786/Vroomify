import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    }
},{
    timestamps : true
});


//Use this line when your backend might reload automatically or import the same model file multiple times — to avoid the “Cannot overwrite model” error. (mongoose.models.user)
const userModel = mongoose.models.user || mongoose.model('User', userSchema);
export default userModel;