const fs = require('fs');

const readInvoiceHtmlFile = () => {
  const invoiceHtml = fs.readFileSync('./html-to-pdf/invoice-preview-4.html', 'utf8');
  return invoiceHtml;
}

module.exports = {
  readInvoiceHtmlFile,
}