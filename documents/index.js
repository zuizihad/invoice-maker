module.exports = ({ 
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
    ExpDate,
    PartialShipment,
    TransShipment,
    BankRef,
    Amount,
    Description,
    Style,
    RetailStore,
    Color,
    Quantity,
    UMO,
    Rate,
    RateUmo,
    Total }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <h3>BILL OF EXCHANGE</h3>
                <h2>1</h2>
                <h4>Amount: USD ${Amount}</h4>
                <h4>Date: ${SCDate}</h4>
                <p>At 90 Days Sight please pay this First Bill of Exchange
                    (Second of the same tenor and date unipaid) To the order
                    of: ${SellersBank}. The Sum Of USD in Words (${Amount}.) Value
                    received againest Readymade Garments Accessories.
                </p>
                <h6>To,</h6>
                <p>${SellersBank}</p>
                
             </table>
             <br />
             <h1 class="justify-center">Total price: ${parseInt(5) + parseInt(6)}$</h1>
          </div>
       </body>
    </html>
    `;
};