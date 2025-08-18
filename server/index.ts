import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { createRouter } from './routes';

const app = express();
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;
app.use(express.json());

app.use('/api', createRouter())
app.get('/health', (_req: Request, res: Response) => {
  res.json({ ok: true });
});
mongoose
    .connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error(err));
