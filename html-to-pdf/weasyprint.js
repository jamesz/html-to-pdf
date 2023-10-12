const weasyprint = require("htmltopdf-weasyprint");
const { readInvoiceHtmlFile } = require('./read-invoice-html-file');

var invoiceHtml = readInvoiceHtmlFile()
var options = { format: 'Letter' };


const printToPdf = async () => {
  const options = { output: "invoice-weasyprint.pdf" }
  try {
    await weasyprint(invoiceHtml, options);
  } catch (err) {
    console.error(err)
  }
}

printToPdf();
