const pdf = require('html-pdf');
const { readInvoiceHtmlFile } = require('./read-invoice-html-file');

var invoiceHtml = readInvoiceHtmlFile()
var options = { format: 'Letter' };

// Notes: Although this looks like it mostly work for what we need, the library has been deprecated
// and is not maintained anymore https://www.npmjs.com/package/html-pdf?activeTab=readme, the reason
// appears to be that PhantomJS got deprecated long time ago https://github.com/marcbachmann/node-html-pdf
pdf.create(invoiceHtml, options).toFile('./invoice-html-pdf.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});
