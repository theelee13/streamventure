var concat = require('concat-stream');
process.stdin.pipe(concat( function (body){
	var str = body.toString().split('').reverse().join('');
	console.log(str);
}));
