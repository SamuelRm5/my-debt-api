import mongoose from 'mongoose';

const dbConnection = async () => {

    try {

        await mongoose.connect("mongodb+srv://samuelrm5:1597458@cluster0.mwyujwx.mongodb.net/test");
        console.log("Successful connection to DB");
        

    } catch (error) {
        throw new Error('An error occurred')
    }

}

export default dbConnection;