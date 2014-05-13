var fs = require('fs');
var fStream = fs.createReadStream(process.argv[2]);
fStream.pipe(process.stdout);
