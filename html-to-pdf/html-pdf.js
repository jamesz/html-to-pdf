const pdf = require('html-pdf');
const { readInvoiceHtmlFile } = require('./read-invoice-html-file');

var invoiceHtml = readInvoiceHtmlFile()
var options = { format: 'Letter' };

pdf.create(invoiceHtml, options).toFile('./invoice-html-pdf.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});
