function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  // var spreadSheetId = "xxxxx"; //แก้ 1
  // var dataRange = "ชีต1!A2:E"; //แก้ 2
  // var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  // var values = range.values;
  // return values;


  var ss = SpreadsheetApp.openById("xxxxxx").getSheets()[0].getDataRange().getDisplayValues()
  Logger.log(ss)
  return ss

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
