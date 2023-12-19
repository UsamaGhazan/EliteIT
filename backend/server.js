import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import productRoutes from './Routes/productRoutes.js';
import cron from 'node-cron';
import Product from './Model/productModel.js';
import rateLimit from 'express-rate-limit';

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

// Updating product Price after every 24 hours using cron library
const updateProductPrices = async () => {
  try {
    const products = await Product.find({});
    products.forEach(async (product) => {
      // Updating the price with random value
      product.price = Math.floor(Math.random() * 100) + 1;
      await product.save();
    });
    console.log('Product prices updated successfully');
  } catch (error) {
    console.error('Error updating product prices:', error);
  }
};

// Scheduling the task to run every 24 hours
cron.schedule('0 0 */24 * * *', () => {
  updateProductPrices();
});

// Limiting number of requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`
  )
);
