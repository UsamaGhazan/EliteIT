import express from 'express';
const router = express.Router();
import {
  addDetails,
  getAllProducts,
  getDetails,
} from '../Controllers/ProductController.js';
router.get('/', getAllProducts);
router.post('/', addDetails);
router.get('/details', getDetails);
export default router;
