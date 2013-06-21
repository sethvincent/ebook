var fs = require('fs');
var mkdirp = require('mkdirp');
var pandoc = require('./pandoc');
var mobi = require('./kindlegen');

module.exports = function(options){
  return new Ebook(options);
}

function Ebook(options){
  this.folder = process.cwd() + '/' + options.folder + '/';
  this.source = options.source;
  this.target = options.source.substring(0, options.source.length - 3);
  var self = this;

  mkdirp(this.folder, function(){
    fs.createReadStream(self.source).pipe(fs.createWriteStream(self.folder + self.source));
    process.chdir(self.folder)

    pandoc({
      source: self.source,
      target: self.target + '.pdf'
    });

    pandoc({
      source: self.source,
      target: self.target + '.epub'
    });

    pandoc({
      source: self.source,
      target: self.target + '.html',
      success: function(){

        mobi({
          source: self.target + '.html',
          target: self.target + '.mobi'
        });

      }
    });
  });
}