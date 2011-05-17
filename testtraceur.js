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
console.log(typeof foo);
module.exports = Foo
