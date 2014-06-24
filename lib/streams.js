
var Streams = function(urls){
	require('events').EventEmitter.call(this);
	this.urls = urls;
};

require('util').inherits(Streams, require('events').EventEmitter);



Streams.prototype.summary = function(){
	console.log(this.urls);
}

module.exports =  Streams;