function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called", target);
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
  }
}

class C {
  @f()
   method() {
    console.log('me', this)
  }

}
var t = new C().method

const toan = { name: 'toan' }
