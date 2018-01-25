var jsPDF = require('jspdf-yworks')
var svg2pdf = require('svg2pdf.js')
var lMargin = 15; //left margin in mm
var rMargin = 15; //right margin in mm

module.exports = {
  makeAttestationPDF(data, qrCode) {
    var doc = new jsPDF("p", "mm", "a4")

    // render the svg element
    var svgElement = document.getElementById('pdftemplate')
    console.log('svgElement', svgElement);
    svg2pdf(svgElement, doc, {
    	xOffset: 0,
    	yOffset: 0,
    	scale: 0.35
    });

    //doc.addImage(qrCode, 'png', doc.internal.pageSize.width - 100, doc.internal.pageSize.height - 100, 100, 100, undefined, 'FAST');
    doc.save('AttestatieClaim Haarlem.pdf')
  }
}
