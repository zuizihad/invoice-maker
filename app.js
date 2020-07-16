const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const CompanyRoutes = require('./CompanyRoutes')
const InvoiceDataRoutes = require('./InvoiceDataRoutes')
const pdfTemplate = require('./documents');

const app =express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/companies', CompanyRoutes)
app.use('/invoicedata', InvoiceDataRoutes)

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('trims.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/trims.pdf`)
})


app.get('/', (req, res) =>{
    res.render('index')
})
app.get('*', (req, res) =>{
    res.send('<h1>404 page not found</h1>')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})