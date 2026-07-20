const express = require('express')
const router = express.Router()
const {
    getAllSales,
    getSaleById,
    createSale
} = require('../controllers/sales')

router.get('/', getAllSales)
router.get('/:id', getSaleById)
router.post('/', createSale)

module.exports = router