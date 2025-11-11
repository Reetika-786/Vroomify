import mongoose from "mongoose";
import User from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'

//create token function

const TOKEN_EXPIRES_IN = '24h';
const JWT_SECRET = 'your_jwt_secret';

const createToken = (userId) => {
    const secret = JWT_SECRET;
    if(! secret) throw new Error('JWT_SECRET is not defined on the server');
    return jwt.sign(
        {id: userId},
        secret,
        {expiresIn: TOKEN_EXPIRES_IN}
    )
}

//register function
export async function register(req, res){
    try{
        const name = String(req.body.name || "").trim();
        //user ka email clean aur consistent banane ke liye next dono steps hain.
        const emailraw = String(req.body.email || "").trim();
        const email = validator.normalizeEmail(emailraw) || emailraw.toLowerCase();
        const password = String(req.body.password || "");

        if(!name || !email || !password){
            return res.status(400).json({
                success : false,
                message: 'All fields are required!'
            });
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({
                success: false,
                message: 'Invalid Email'
            })
        }

        if(password.length < 8){
            return res.status(400).json({
                success : false,
                message: 'Password must be atleast 8 characters'
            })
        }

        const exists = await User.findOne({email}).lean();
        if(exists){
            return res.status(409).json({
                success: false,
                message: 'User already exists'
            })
        }

        const newId = new mongoose.Types.ObjectId();
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            _id : newId,
            name,
            email,
            password : hashedPassword,
        });
        await user.save();

        const token = createToken(newId.toString());

        return res.status(201).json({
            success : true,
            message :  'Account created successfully!',
            token,
            user: {
                id : user._id,
                name: user.name,
                email: user.email
            }
        })
    }

    catch(err){
        console.error('Register error', err);
        if(err.code === 11000) 
            return res.status(409).json({
                success: false,
                message: 'User already exists'
            });
            return res.status(500).json({
                success: false,
                message: 'Server Error'
            })
    }
}

