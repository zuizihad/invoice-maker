const  companys  = require('./Company')

exports.getAllCompanys = (req, res) =>{
    res.json(companys.getAllCompanys())
}

exports.createCompany = (req, res) =>{
    let { CompanyName, CompanyEmail,CompanyPhone, CompanyAddress, CompanyBankAccount, CompanyDescription,CompanySCNO,CompanyRegDate} = req.body
    let company = companys.createCompany({
        CompanyName, CompanyEmail,CompanyPhone, CompanyAddress, CompanyBankAccount, CompanyDescription,CompanySCNO,CompanyRegDate
    })
    res.json(company)
}

exports.getCompanyById = (req, res) =>{
    let {id}  =req.params
    id = parseInt(id)

    let company = companys.getCompanyById(id)
    res.json(company)
}

exports.updateCompany = (req, res) =>{
    let {id} = req.params
    id = parseInt(id)

    let { CompanyName, CompanyEmail,CompanyPhone, CompanyAddress, CompanyBankAccount, CompanyDescription,CompanySCNO,CompanyRegDate}=req.body
    let company = companys.updateCompanyById(id, {
        CompanyName, CompanyEmail,CompanyPhone, CompanyAddress, CompanyBankAccount, CompanyDescription,CompanySCNO,CompanyRegDate
    })
    res.json(company)
}

exports.deleteCompany = (req, res) =>{
     let {id} = req.params
     id = parseInt(id)

     let company = companys.deleteCompanyById(id)
     res.json(company)
}