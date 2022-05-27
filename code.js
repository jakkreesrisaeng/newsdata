function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  // var spreadSheetId = "18F2mIxY6uWGpdgfE_15Ot9ZVwCEwZx23vqGjp25zA6s"; //แก้ 1
  // var dataRange = "ชีต1!A2:E"; //แก้ 2
  // var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  // var values = range.values;
  // return values;


  var ss = SpreadsheetApp.openById("18F2mIxY6uWGpdgfE_15Ot9ZVwCEwZx23vqGjp25zA6s").getSheets()[0].getDataRange().getDisplayValues()
  Logger.log(ss)
  return ss

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
