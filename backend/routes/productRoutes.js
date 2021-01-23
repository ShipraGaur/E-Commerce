import express from 'express'
import { 
    getProducts, 
    getProductById, 
    deleteProduct, 
    updateProduct, 
    createProduct, 
    createProductReview, 
    getTopProducts,
    updateProductStock
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router
    .route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)
router.get('/top', getTopProducts)
router
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, updateProduct)
router.put('/:id/updateStock',protect, updateProductStock)
router.route('/:id/reviews').post(protect, createProductReview)


export default router