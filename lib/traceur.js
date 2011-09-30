(function() {
  var fs   = require('fs');  
  var orig = require('module').prototype._compile;
  var transform = require('./transform');
  require('module').prototype._compile = function(content, filename) {
    return orig.call(this, transform(content, filename), filename);
  };
})();
