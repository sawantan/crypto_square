// create our Cypto class
// it takes a string as an argument

var Crypto = function(text){
	// store the string for use elsewhere
	this.message = text;
};


Crypto.prototype.normalizePlaintext = function() {
	return this.message.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	//math.Ceil will always round up; math.Floor will round down, math.round will do traditional rounding
	return Math.ceil(Math.sqrt(length));

};

Crypto.prototype.plaintextSegments = function() {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size();

	for (var i = 0; i < npt.length; i += size) {
		// extract segments from the normalized plain text
		// and add it to the segments array
		segments.push(npt.substr(i, size));
		
	};
	return segments
};

Crypto.prototype.ciphertext = function() {
	var ct = "",
		size = this.size(), // number of columns
		segs = this.plaintextSegments(); //number of rows
	// lets loop through the columns
	// columns are reprsented by size
	for (var i = 0; i < size; i +=1) {
		//loop through the rows
		//rows are represented by 
		for(var j = 0; j < segs.length; j +=1) {
			ct += segs[j].charAt(i);
		}
	}
	// returns full string that represents
	// the cipher text i.e. the encoded message
return ct;
};

module.exports = Crypto;
