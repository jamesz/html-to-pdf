const fs = require('fs');

const readInvoiceHtmlFile = () => {
  const invoiceHtml = fs.readFileSync('./invoice.html', 'utf8');
  return invoiceHtml;
}

module.exports = {
  readInvoiceHtmlFile,
}