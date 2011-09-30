class Foo {
  constructor(foo = 'RAWR') {
    console.log(foo);
  }
  bar(...baz) {
    console.log('baz', ...baz)
  }
  static baz(bar = 3) {
    console.log(bar);
  }
};
{
  let foo = 'bar';
  let baz = 'baz';
  console.log(foo, baz);  
}
cb = (cb)-> {
  cb(42);
}
cb((x) -> {
  console.error(x * 2);
})
Foo.baz();
var y = new Foo('BLAH');
var x = new Foo();
x.bar(1,2,3,4,5);
