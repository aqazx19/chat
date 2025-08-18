import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { createRouter } from './routes';
import path from 'path';
import fs from 'fs';

const app = express();
dotenv.config();
const PORT = Number(process.env.PORT || 4000);
app.use(express.json());
const clientDistDir = path.resolve(process.cwd(), 'client/dist');
console.log(clientDistDir);
console.log(fs.readFileSync(path.join(clientDistDir, 'index.html'), 'utf8'));
app.use('/api', createRouter());
app.get('/health', (_req: Request, res: Response) => {
  res.json({ ok: true });
});
app.use(express.static(clientDistDir));
app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDistDir, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// mongoose
//     .connect(process.env.MONGO_URI || '')
//     .then(() => {
//         console.log('Connected to MongoDB');
//         app.listen(PORT, () => {
//             console.log(`Server running on http://localhost:${PORT}`);
//         });
//     })
//     .catch((err) => console.error(err));
