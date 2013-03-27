var fs = require('fs');

function CharToken(String){
	this.String = String || "";
	this.ArrayOfChar = [];
	this.counterObj = {};
}

CharToken.prototype.loadFromFile = function(path, cb){
	fs.readFile(path,'utf8', cb);
}

CharToken.prototype.setString = function(string){
	this.String = string;
}

CharToken.prototype.clearString = function(){
	this.String = "";
}

CharToken.prototype.explodeString = function(){
	//remove punctuation 
	var str = this.String.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g,"");

	//lowercased & expolde string
	this.ArrayOfChar = str.toLowerCase().split("");
}

CharToken.prototype.countChar = function(){
	for(var i=0;i<this.ArrayOfChar.length;i++){
		if(this.counterObj.hasOwnProperty(this.ArrayOfChar[i])){
			this.counterObj[this.ArrayOfChar[i]] += 1;
		} else {
			this.counterObj[this.ArrayOfChar[i]] = 1;
		}
	}
}

CharToken.prototype.getTopChar = function(){
 	var sortable = [];
 	for (var chars in this.counterObj)
     	sortable.push([chars, this.counterObj[chars]]);
 	
 	return sortable.sort(function(a, b) {return b[1] - a[1]}).slice(0,5);
}

CharToken.prototype.getText = function(Source){

}

module.exports = CharToken;