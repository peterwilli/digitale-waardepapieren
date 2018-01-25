var jsPDF = require('jspdf')
var lMargin = 15; //left margin in mm
var rMargin = 15; //right margin in mm

module.exports = {
  makeAttestationPDF(data, qrCode, template, iframe) {
    var doc = new jsPDF("p", "mm", "a4")

    // render the svg element
    doc.addImage(template, 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'FAST')
    doc.setFont("Arial");
    doc.setFontType("normal");
    doc.setFontSize(11);

    // Set data to an array for serial processing
    data = [data.username, data.username, data.birth_date, data.birth_city, "" + Math.round(1000000 + (Math.random() * 99999))]
    console.log(i, data);
    for(var i = 0; i < 5; i++) {
      doc.text(70, 104.5 + (i * 5.2), data[i]);
    }

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
