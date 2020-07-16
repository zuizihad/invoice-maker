const router = require('express').Router()
const {
    getAllInvoiceDatas,
    createInvoiceData,
    getInvoiceDataById,
    updateInvoiceData,
    deleteInvoiceData
  } = require('./InvoiceDataController')
router.get('/', getAllInvoiceDatas)     
router.post('/create', createInvoiceData)
router.get('/:id', getInvoiceDataById)
router.put('/:id', updateInvoiceData)
router.delete('/:id', deleteInvoiceData)

module.exports = router