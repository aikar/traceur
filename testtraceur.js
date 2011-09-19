class Foo {
  new() {
    console.log('RAWR');
  }
  bar() {
    console.log('baz')
  }
};
{
  let foo = 'bar';
  console.log(foo);  
}
cb = (cb)-> {
  cb(42);
}
cb((x) -> {
  console.error(x * 2);
})
console.log(typeof foo);
module.exports = Foo
