load('calcFuncs.js');
load('drawFuncs.js');
load('TextCell.js');
load('UnderlinedCell.js');
load('CTextCell.js');
load('shoes.js');

// Here's where you load the dataset
// load('mountains.js');
// load('houses.js');
//load('larder.js');

// This code does date recognition so they can be right-justified
//   You can turn it on and off with this variable
var rightJustifyDates = true;
// This regular expression contains logic-by-pattern to identify a date
var dateReg = (rightJustifyDates?/^(\d{2}|\d)[.-/](\d|\d{2})[.-/]\d{2}$/:null);

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      var value = row[name];
      // This was changed:
      // Here is where new date type test will go
      if ((typeof value == "number"))
        return new CTextCell(String(value));
      else
	// Let's change the way we use the regex as per Ch. 9
        // if(typeof value == "string" && value.match(dateReg))
	if(typeof value == "string" && dateReg.test(value))
	  return new CTextCell(String(value));
	else
          return new CTextCell(String(value));
    });
  });
  return [headers].concat(body);
}

print(drawTable(dataTable(SHOES)));
