class InvoiceDatas {
    constructor(){
        this.invoicedatas = []
    }

    getAllInvoiceDatas(){
        return this.invoicedatas
    }
    getInvoiceDataById(id){
        return this.invoicedatas.find(invoicedata => invoicedata.id ===id)
    }
    createInvoiceData(invoicedata){
        invoicedata.id= this.invoicedatas.length +1
        this.invoicedatas.push(invoicedata)
        return invoicedata
    }
    updateInvoiceDataById(id, updatedInvoiceData){
        let index = this.invoicedatas.findIndex(invoicedata => invoicedata.id ===id)

        this.invoicedatas[index].CompanyName = updatedInvoiceData.CompanyName || this.invoicedatas[index].CompanyName
        this.invoicedatas[index].CompanyEmail = updatedInvoiceData.CompanyEmail || this.invoicedatas[index].CompanyEmail
        this.invoicedatas[index].CompanyPhone = updatedInvoiceData.CompanyPhone || this.invoicedatas[index].CompanyPhone
        this.invoicedatas[index].CompanyAddress = updatedInvoiceData.CompanyAddress || this.invoicedatas[index].CompanyAddress
        this.invoicedatas[index].CompanySCNO = updatedInvoiceData.CompanySCNO || this.invoicedatas[index].CompanySCNO
        this.invoicedatas[index].SCDate = updatedInvoiceData.SCDate || this.invoicedatas[index].SCDate
        this.invoicedatas[index].CompanyBankAccount = updatedInvoiceData.CompanyBankAccount || this.invoicedatas[index].CompanyBankAccount
        this.invoicedatas[index].ShipTo = updatedInvoiceData.ShipTo || this.invoicedatas[index].ShipTo
        this.invoicedatas[index].BillTo = updatedInvoiceData.BillTo || this.invoicedatas[index].BillTo
        this.invoicedatas[index].PortOfLoading = updatedInvoiceData.PortOfLoading || this.invoicedatas[index].PortOfLoading
        this.invoicedatas[index].FinalDestination = updatedInvoiceData.FinalDestination || this.invoicedatas[index].FinalDestination
        this.invoicedatas[index].LcafNO = updatedInvoiceData.LcafNO || this.invoicedatas[index].LcafNO
        this.invoicedatas[index].TermsOfShipment = updatedInvoiceData.TermsOfShipment || this.invoicedatas[index].TermsOfShipment
        this.invoicedatas[index].TermsOfPayment = updatedInvoiceData.TermsOfPayment || this.invoicedatas[index].TermsOfPayment
        this.invoicedatas[index].HSCode = updatedInvoiceData.HSCode || this.invoicedatas[index].HSCode
        this.invoicedatas[index].ModeOfTransport = updatedInvoiceData.ModeOfTransport || this.invoicedatas[index].ModeOfTransport
        this.invoicedatas[index].LastDateOfDelivery = updatedInvoiceData.LastDateOfDelivery || this.invoicedatas[index].LastDateOfDelivery
        this.invoicedatas[index].DateOfExpiary = updatedInvoiceData.DateOfExpiary || this.invoicedatas[index].DateOfExpiary
        this.invoicedatas[index].Packing = updatedInvoiceData.Packing || this.invoicedatas[index].Packing
        this.invoicedatas[index].SellersBank = updatedInvoiceData.SellersBank || this.invoicedatas[index].SellersBank
        this.invoicedatas[index].ExpDate = updatedInvoiceData.ExpDate || this.invoicedatas[index].ExpDate
        this.invoicedatas[index].PartialShipment = updatedInvoiceData.PartialShipment || this.invoicedatas[index].PartialShipment
        this.invoicedatas[index].TransShipment = updatedInvoiceData.TransShipment || this.invoicedatas[index].TransShipment
        this.invoicedatas[index].BankRef = updatedInvoiceData.BankRef || this.invoicedatas[index].BankRef
        this.invoicedatas[index].Amount = updatedInvoiceData.Amount || this.invoicedatas[index].Amount
        this.invoicedatas[index].Description = updatedInvoiceData.Description || this.invoicedatas[index].Description
        this.invoicedatas[index].Style = updatedInvoiceData.Style || this.invoicedatas[index].Style
        this.invoicedatas[index].RetailStore = updatedInvoiceData.RetailStore || this.invoicedatas[index].RetailStore
        this.invoicedatas[index].Color = updatedInvoiceData.Color || this.invoicedatas[index].Color
        this.invoicedatas[index].Qunatity = updatedInvoiceData.Qunatity || this.invoicedatas[index].Qunatity
        this.invoicedatas[index].Umo = updatedInvoiceData.Umo || this.invoicedatas[index].Umo
        this.invoicedatas[index].Rate = updatedInvoiceData.Rate || this.invoicedatas[index].Rate
        this.invoicedatas[index].RateUMO = updatedInvoiceData.RateUMO || this.invoicedatas[index].RateUMO
            
        return this.invoicedatas[index]        
    }

    deleteInvoiceDataById(id){
        let index = this.invoicedatas.findIndex(invoicedata=> invoicedata.id===id)
        let deleteObj = this.invoicedatas[index]

        this.invoicedatas = this.invoicedatas.filter(invoicedata => invoicedata.id !== id)
        return deleteObj
    }
}

module.exports = new InvoiceDatas()