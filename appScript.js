// Scrappy API using Google Sheets and Apps Script

function doGet(request) {

  // reads data from spreadsheet
  var document = SpreadsheetApp.getActiveSpreadsheet();
  
  // name of sheet with data
  var sheet = document.getSheetByName('data-sheet');
  var values = sheet.getDataRange().getValues();
  var datastream = [];

  // iterates through rows
  for (var i=1; i<values.length; i++) {
    var row = {};

    // iterates througt columns
    // row 0 contains headers
    for (var k=0; k<values.length; k++) {
        row[values[0][k]] = values[i][k];
      }

    // pushes values to datastream
    datastream.push(row);
    
  }

  // returns datastream in JSON format
  return ContentService.createTextOutput(JSON.stringify({data: datastream})).setMimeType(ContentService.MimeType.JSON)
}
