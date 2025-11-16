import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from "./routes/productRoutes.js";



const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use("/api/products", productRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Server running ✅' });
});

export default app;
