var example = "While many other authors had published works of fantasy before Tolkien";

var CharToken = require('./CharToken'),
 	c = new CharToken();

//Asynchronous load from files example
c.loadFromFile("/Users/hadipratama/weka.log", function(err, data){
	if(err) throw err;
	c.setString(data);
	c.explodeString();
	c.countChar();
	console.log(c.getTopChar());
});


//example simple string
/*
c.setString(example);
c.explodeString();
c.countChar();
console.log(c.getTopChar());
*/