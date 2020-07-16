class Companys {
    constructor(){
        this.companys = []
    }

    getAllCompanys(){
        return this.companys
    }

    getCompanyById(id){
        return this.companys.find(company => company.id ===id)
    }

    createCompany(company){
        company.id= this.companys.length +1
        this.companys.push(company)
        return company
    }

    updateCompanyById(id, updatedCompany){
        let index = this.companys.findIndex(company => company.id ===id)

        this.companys[index].CompanyName = updatedCompany.CompanyName || this.companys[index].CompanyName
        this.companys[index].CompanyEmail = updatedCompany.CompanyEmail || this.companys[index].CompanyEmail
        this.companys[index].CompanyPhone = updatedCompany.CompanyPhone || this.companys[index].CompanyPhone
        this.companys[index].CompanyAddress = updatedCompany.CompanyAddress || this.companys[index].CompanyAddress
        this.companys[index].CompanySCNO = updatedCompany.CompanySCNO || this.companys[index].CompanySCNO
        this.companys[index].CompanyBankAccount = updatedCompany.CompanyBankAccount || this.companys[index].CompanyBankAccount
        this.companys[index].CompanyDescription = updatedCompany.CompanyDescription || this.companys[index].CompanyDescription
        this.companys[index].CompanyRegDate = updatedCompany.CompanyRegDate || this.companys[index].CompanyRegDate
        return this.companys[index]        
    }

    deleteCompanyById(id){
        let index = this.companys.findIndex(company=> company.id===id)
        let deleteObj = this.companys[index]

        this.companys = this.companys.filter(company => company.id !== id)
        return deleteObj
    }
}

module.exports = new Companys()