const { jsPDF } = require("jspdf");
const { readInvoiceHtmlFile } = require('./read-invoice-html-file');

// Print text to PDF (manually positioning each piece of text)
console.log('See text.pdf in local directory');
const doc = new jsPDF();

var invoiceHtml = readInvoiceHtmlFile()
doc.text(invoiceHtml, 10, 10);
doc.save("invoice-jspdf.pdf");


// Print html to PDF
// The below doesn't work in node https://www.codexworld.com/convert-html-to-pdf-using-javascript-jspdf/
// it needs the browser document object
// console.log('See text.pdf in local directory');
// const doc = new jsPDF();
// // Source HTMLElement or a string containing HTML.
// var elementHTML = fs.readFileSync('./invoice-preview-3.html', 'utf8');
// doc.html(elementHTML, {
//     callback: function(doc) {
//         // Save the PDF
//         doc.save('html.pdf');
//     },
//     x: 15,
//     y: 15,
//     width: 170, //target width in the PDF document
//     windowWidth: 650 //window width in CSS pixels
// });
