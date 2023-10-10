const fs = require('fs');

const readInvoiceHtmlFile = () => {
  const invoiceHtml = fs.readFileSync('./html-to-pdf/invoice-preview-3.html', 'utf8');
  return invoiceHtml;
}

module.exports = {
  readInvoiceHtmlFile,
}