load('calcFuncs.js');
load('drawFuncs.js');
load('TextCell.js');
load('UnderlinedCell.js');
load('houses.js');
load('mountains.js');
load('shoes.js');
function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}

print(drawTable(dataTable(SHOES)));
