const router = require('express').Router()
const {
    getAllCompanys,
    createCompany,
    getCompanyById,
    updateCompany,
    deleteCompany
  } = require('./CompanyController')
router.get('/', getAllCompanys)     
router.post('/create', createCompany)
router.get('/:id', getCompanyById)
router.put('/:id', updateCompany)
router.delete('/:id', deleteCompany)

module.exports = router