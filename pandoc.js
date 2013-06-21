var cmd = require('child_process').exec;

module.exports = function(options) {
  return new Pandoc(options);
}

function Pandoc(options){
  this.source = options.source;
  this.target = options.target;

  cmd('pandoc ' + this.source + ' -o ' + this.target + ' -s', function(error, stdout, stderr){
    if (error && options.error){
      options.error(error);
    }
    
    if (options.success){
      options.success(stdout);
    }
  });
}