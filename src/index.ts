import express from 'express';
import cors from 'cors';
import history from './routes/history';
import dbConnection from './database/config';

const app = express();

// MIDDLEWARES
app.use( express.json() );
app.use( cors() );

// PORT
const PORT = 3000;

// DB  CONNECTION
const connectionDB = async()  =>  {
    await dbConnection();
}
connectionDB();

// SERVICES
app.use('/api/history', history)

// RUNNING PORT
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})