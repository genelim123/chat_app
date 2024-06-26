
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToMongoDB from './db/connectToMongoDB.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// To parse incoming requests with JSON payloads (from req.body)
app.use(express.json());

// To parse the incoming cookies from req.cookies
app.use(cookieParser());

// Setup Auth Routes with /api/auth prefix (Middleware)
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


// app.get('/', (req, res) => {
// Root route http://localhost:3000/
//     res.send('Hello World');
// });



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});