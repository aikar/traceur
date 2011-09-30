traceur = global.traceur || {};require("traceur-runtime");
var Foo = traceur.runtime.createClass("Foo", null, null, function() { 
  var foo = arguments.length > 0 ? arguments[0]: 'RAWR'; 
  console.log(foo); 
}, undefined, { bar: function() { 
    var baz = Array.prototype.slice.call(arguments, 0); 
    (function($0, $1) { 
      return $0.log.apply($0, $1); 
    })(console, traceur.runtime.spread([false, 'baz', true, baz])); 
  } }, function $static() { 
  this.baz = function() { 
    var bar = arguments.length > 0 ? arguments[0]: 3; 
    console.log(bar); 
  }; 
}, null); 
; 
{ 
  try { 
    throw undefined; 
  } catch(baz) { 
    try { 
      throw undefined; 
    } catch(foo) { 
      foo = 'bar'; 
      baz = 'baz'; 
      console.log(foo, baz); 
    } 
  } 
} 
cb = function(cb) { 
  cb(42); 
}; 
cb(function(x) { 
  console.error(x * 2); 
}); 
Foo.baz(); 
var y = new Foo('BLAH'); 
var x = new Foo(); 
x.bar(1, 2, 3, 4, 5); 
