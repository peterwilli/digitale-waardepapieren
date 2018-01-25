var jsPDF = require('jspdf')
var lMargin = 15; //left margin in mm
var rMargin = 15; //right margin in mm

module.exports = {
  makeAttestationPDF(data, qrCode, template, iframe) {
    var doc = new jsPDF("p", "mm", "a4")

    // render the svg element
    doc.addImage(template, 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'FAST')

    doc.setFont("courier");
    doc.setFontType("normal");
    doc.text(70, 120, 'This is courier normal.');

    //doc.addImage(qrCode, 'png', doc.internal.pageSize.width - 100, doc.internal.pageSize.height - 100, 100, 100, undefined, 'FAST');
    if(typeof iframe !== 'undefined') {
      var data = doc.output('datauristring');
      iframe.src = data;
    }
    else {
      doc.save('AttestatieClaim Haarlem.pdf')
    }
  }
}
