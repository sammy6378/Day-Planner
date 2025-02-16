import mongoose from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
}
// user schema
export const userSchema = new mongoose.Schema<IUser>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true});


// user model
export const userModel = mongoose.model('User', userSchema);