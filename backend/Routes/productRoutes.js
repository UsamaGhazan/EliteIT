import express from 'express';
const router = express.Router();
import {
  addDetails,
  getAllProducts,
} from '../Controllers/ProductController.js';
router.get('/', getAllProducts);
router.post('/', addDetails);

export default router;
