
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from './routes/message.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// To parse incoming requests with JSON payloads (from req.body)
app.use(express.json());

// Setup Auth Routes with /api/auth prefix (Middleware)
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


// app.get('/', (req, res) => {
// Root route http://localhost:3000/
//     res.send('Hello World');
// });



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});