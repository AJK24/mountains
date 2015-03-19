function CTextCell(text) {
  TextCell.call(this, text);
}
CTextCell.prototype = Object.create(TextCell.prototype);
CTextCell.prototype.draw = function(width, height) {
  var result = [];

  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";

     var spacing = 0;
     spacing = (width - line.length)/2;

     if ( (spacing * 2) % 2 == 0)
	
   	     result.push(repeat(" ", spacing) + line + repeat(" ", spacing));
	 
     else
	
	     result.push(repeat(" ", spacing) + line + repeat(" ", spacing - 1));
	
  }



   return result;
};

