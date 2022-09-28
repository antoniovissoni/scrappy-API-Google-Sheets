
# Scrappy API using Google Sheets

This is a free pseudo-API using a public Google Sheets and AppsScript.

Can be used for times when you just need to retrieve data easily and do not really care about security (which is probably a bad idea).

This is not indended as a replacement for an actual API, but more of a temporary measure when working with small front-end projects or hackathons. Use it with caution. Good luck!


## Google Sheets

New public Google Sheet:

```bash
  Create a new Google Sheet. Share it with others.
```

![App Screenshot](/screenshots/new_google_sheet.png)

```bash
  Allow access to anyone with the link.
```

![App Screenshot](/screenshots/anyone_with_the_link.png)

```bash
  Add your data (with headers). Rename active sheet.
```

![App Screenshot](/screenshots/add_data_rename_sheet.png)

Generate Web App URL using Apps Script:

```bash
  Go to 'Extensions' and 'Apps Script'.
```

![App Screenshot](/screenshots/extensions_appsscript.png)
## Apps Script

Script iterates through all values in the dataset. Returns data in JSON format.

```javascript
// Scrappy API using Google Sheets and Apps Script

function doGet(request) {

  // reads data from spreadsheet
  var document = SpreadsheetApp.getActiveSpreadsheet();
  
  // name of sheet with data
  var sheet = document.getSheetByName('Sheet1');
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

```

![App Screenshot](/screenshots/apps_script.png)

Save, run and deploy:

![App Screenshot](/screenshots/save_run_deploy.png)

## Authorize App

Review permissions:

```bash
  Go to 'Show Advanced' and follow the link to your API (this message appears when you are not a verified developer).  
```

![App Screenshot](/screenshots/authorization_required.png)

![App Screenshot](/screenshots/unverified_app.png)

```bash
  Go to 'New deployment' >> 'Web app'. Allow access to 'Anyone' and deploy.
```

![App Screenshot](/screenshots/new_deployment.png)

![App Screenshot](/screenshots/new_deployment_anyone.png)

Web app URL link:

```bash
  Use Web app URL as API endpoint. Data will be returned as JSON.  
```

![App Screenshot](/screenshots/web_app_url.png)

![App Screenshot](/screenshots/json_data.png)
## Author

- [@techwithantonio](https://www.github.com/techwithantonio)


## Acknowledgements

 - [Original idea by Varshith Hegde](https://varshithvhegde.me/)

