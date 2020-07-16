const  invoicedatas  = require('./InvoiceData')

exports.getAllInvoiceDatas = (req, res) =>{
    res.json(invoicedatas.getAllInvoiceDatas())
}

exports.createInvoiceData = (req, res) =>{
    let { 
       CompanyName, 
       CompanyEmail,
       CompanyPhone, 
       CompanyAddress, 
       CompanyBankAccount, 
       CompanySCNO,
       SCDate,
       ShipTo,
       BillTo,
       PortOfLoading,
       FinalDestination,
       LcafNO,
       TermsOfShipment,
       TermsOfPayment,
       HSCode,
       ModeOfTransport,
       LastDateOfDelivary,
       DateOfExpiary,
       Packing,
       SellersBank,
       PartialShipment,
       TransShipment,
       BankRef,
       Amount,
       Description,
       ExpDate,
       Style,
       RetailStore,
       Color,
       Quantity,
       Umo,
       Rate,
       RateUmo,
      
        } = req.body
    let invoicedata = invoicedatas.createInvoiceData({
        CompanyName, 
       CompanyEmail,
       CompanyPhone, 
       CompanyAddress, 
       CompanyBankAccount, 
       CompanySCNO,
       SCDate,
       ShipTo,
       BillTo,
       PortOfLoading,
       FinalDestination,
       LcafNO,
       TermsOfShipment,
       TermsOfPayment,
       HSCode,
       ModeOfTransport,
       LastDateOfDelivary,
       DateOfExpiary,
       Packing,
       SellersBank,
       PartialShipment,
       TransShipment,
       BankRef,
       Amount,
       Description,
       ExpDate,
       Style,
       RetailStore,
       Color,
       Quantity,
       Umo,
       Rate,
       RateUmo,
      
    })
    res.json(invoicedata)
}

exports.getInvoiceDataById = (req, res) =>{
    let {id}  =req.params
    id = parseInt(id)

    let invoicedata = invoicedatas.getInvoiceDataById(id)
    res.json(invoicedata)
}

exports.updateInvoiceData = (req, res) =>{
    let {id} = req.params
    id = parseInt(id)

    let {
        CompanyName, 
       CompanyEmail,
       CompanyPhone, 
       CompanyAddress, 
       CompanyBankAccount, 
       CompanySCNO,
       SCDate,
       ShipTo,
       BillTo,
       PortOfLoading,
       FinalDestination,
       LcafNO,
       TermsOfShipment,
       TermsOfPayment,
       HSCode,
       ModeOfTransport,
       LastDateOfDelivary,
       DateOfExpiary,
       Packing,
       SellersBank,
       PartialShipment,
       TransShipment,
       BankRef,
       Amount,
       Description,
       ExpDate,
       Style,
       RetailStore,
       Color,
       Quantity,
       Umo,
       Rate,
       RateUmo,
      } = req.body
    let invoicedata = invoicedatas.updateInvoiceDataById(id, {
        CompanyName, 
       CompanyEmail,
       CompanyPhone, 
       CompanyAddress, 
       CompanyBankAccount, 
       CompanySCNO,
       SCDate,
       ShipTo,
       BillTo,
       PortOfLoading,
       FinalDestination,
       LcafNO,
       TermsOfShipment,
       TermsOfPayment,
       HSCode,
       ModeOfTransport,
       LastDateOfDelivary,
       DateOfExpiary,
       Packing,
       SellersBank,
       PartialShipment,
       TransShipment,
       BankRef,
       Amount,
       Description,
       ExpDate,
       Style,
       RetailStore,
       Color,
       Quantity,
       Umo,
       Rate,
       RateUmo,
      
    })
    res.json(invoicedata)
}

exports.deleteInvoiceData = (req, res) =>{
     let {id} = req.params
     id = parseInt(id)

     let invoicedata = invoicedatas.deleteInvoiceDataById(id)
     res.json(invoicedata)
}