//necessary modules: split and through.
var through = require('through');
var split = require('split');		//way of using split() on a stream.
var i =0;	//counter.
var tr = through(function (buf){
	if(i%2==0){		//comparison is backwards, but we start at an odd number. weird way of doing things
		this.queue(buf.toLowerCase()+'\n');	//odd numbers
	}
	else{
		this.queue(buf.toUpperCase()+'\n');	//even nunbers
	}
	i++;
}, function(){
	this.queue(null);		//done writing.
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);	//pass stdin>split('\n')>tr()>stdout
//not a fan of this challenge, as it was fairly ambiguous.
//instead of passing through a stream, line by line, I assumed a filestream would be passed,
//i.e. a bunch of text with \ns in there. Anyway, I had the split handling inside the write function
//instead of requiring the stream split() module. So whoops.
