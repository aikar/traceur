
(function() {
  var
      fs    = require('fs'),
      path  = require('path'),
      vm    = require('vm');
  function importScript(filename) {
    filename = path.join(__dirname + '/traceur/src', filename);
    
    var data = fs.readFileSync(filename);
    if (!data) {
      throw new Error('Failed to import ' + filename);
    }
    data = data.toString('utf8');
    //console.error(data);
    vm.runInThisContext(data, filename)
  };
  
  global.importScript = importScript;
  importScript('traceur.js');
  
  //global.traceur = traceurContext.traceur;
  var traceur = global.traceur;
  
  // this function is silly and makes traceur unusable. so disable it.
  traceur.semantics.FreeVariableChecker.checkProgram = function() {}
  
  
  delete global.importScript;
  
  var orig = require.extensions['.js'];
  require.extensions['.js'] = function(module, filename) {
    var reporter = new traceur.util.ErrorReporter();
    var project = new traceur.semantics.symbols.Project();

    //console.error('Reading file...', filename);
    
    var data = fs.readFileSync(filename);
    if (!data) {
      //console.error('Failed to read ' + filename);
      return false;
    }
    data = data.toString('utf8');
    var sourceFile = new traceur.syntax.SourceFile(filename, data);
    project.addFile(sourceFile);
  
    //console.error('Compiling...');
    var results = traceur.codegeneration.Compiler.compile(reporter, project);
    if (reporter.hadError()) {
      console.error('Compilation failed.');
      return false;
    }

    //console.error('Compilation successful');
    var result = '';
    results.keys().forEach(function(file) {
      var tree = results.get(file);
      result += traceur.codegeneration.ParseTreeWriter.write(tree, false);
    });
    //console.error(result);
    module._compile(result, filename);
    return true;
  };
})();
