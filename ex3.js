//first requirement is to install through package so...
// npm install through. cool package. yeah.
var through = require('through');
var tr = through( function (buf){	//this is the write function.
	this.queue(buf.toString().toUpperCase());
}, function(){	//this is the end function...
	this.queue(null);
});	//now we have a stream with which we may play.
process.stdin.pipe(tr).pipe(process.stdout);
