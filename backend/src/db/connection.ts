import { connect, disconnect } from 'mongoose';
export default async function connectToDatabase() {
    try {
        const mongodbUrl = process.env.MONGODB_URL || ''; // Set a default value if MONGODB_URL is undefined
        await connect(mongodbUrl);
    } catch (error) {
        console.log(error);
        throw new Error('could not connect to MongoDB');
    }
}

    async function disconnectFromDatabase() {
        try {
            await disconnect();
        } catch (error) {
            console.log(error);
            throw new Error('could not disconnect from MongoDB');
        }
    }

    export { connectToDatabase, disconnectFromDatabase };