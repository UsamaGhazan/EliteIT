import asyncHandler from 'express-async-handler';
import Product from '../Model/productModel.js';
import Record from '../Model/recordModel.js';
// Get all products route handler
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
// Add details (record) route handler
const addDetails = asyncHandler(async (req, res) => {
  try {
    const { name, email, product, rating } = req.body;

    const newRecord = new Record({
      name,
      email,
      product,
      rating,
    });

    await newRecord.save();

    res
      .status(201)
      .json({ success: true, message: 'Record saved successfully' });
  } catch (error) {
    console.error('Error saving record:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
// Get all details (records) route handler
const getDetails = asyncHandler(async (req, res) => {
  const record = await Record.find({});
  res.json(record);
});

export { addDetails, getAllProducts, getDetails };
