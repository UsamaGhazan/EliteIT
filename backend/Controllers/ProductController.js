import asyncHandler from 'express-async-handler';
import Product from '../Model/productModel.js';
import Record from '../Model/recordModel.js';
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.json(products);
});
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

export { addDetails, getAllProducts };
