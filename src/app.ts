import 'dotenv/config';
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import authRoutes from "./routes/authRoute";
import passengerRoutes from "./routes/passengerRoute";
import parcelRoutes from "./routes/parcelRoute";
import path from 'path';



const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api',authRoutes);
app.use("/api/travel",passengerRoutes)
app.use("/api/parcel",parcelRoutes);


const indexHtml = path.join(__dirname, './components/index.html');

app.get('/', (req: Request, res: Response) => {
  res.sendFile(indexHtml);
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
