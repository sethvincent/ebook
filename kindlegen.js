var cmd = require('child_process').exec;

module.exports = function(options) {
  return new KindleGen(options);
}

function KindleGen(options){
  this.source = options.source;
  this.target = options.target;
  this.kindlegenDir = __dirname + '/kindlegen-mac/kindlegen';

  var kindlegenCmd =  this.kindlegenDir + ' ' + this.source + ' -o ' + this.target;

  var mobi = cmd(kindlegenCmd, function(error, stdout, stderr){
    if (error && options.error){
      options.error(error);
    }

    if (options.success){
      options.success(stdout);
    }
  });
}