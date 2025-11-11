import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://reetika848_db_user:carrental1267@cluster0.m89lrg5.mongodb.net/Vroomify')
    .then(() => console.log('DB Connected'));
}
