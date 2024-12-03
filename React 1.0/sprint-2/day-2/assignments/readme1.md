what is the difference between Props and State?

//
-Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
//


Explain the useState API?

//
-The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.
//

Explain the how map, filter, reduce work

//
-map(), filter() and reduce() work in the same way: They each accept a function and a sequence of elements and return the result of applying the received function to each element in the sequence. In the two examples above, we'd defined our functions using Python's def keyword.
//
```
Create your own map, filter, reducer methods and attach it to an array using prototype chain ( Unit 3 / JS-201 concept )

//
let arr = new Array(1, 2, 3, 4, 5, 6);

//pop()
Array.prototype.myPop = function () {
let arrPop = [];
for (let i = 0; i < this.length - 1; i++) {
arrPop.push(this[i]);
}
arr = arrPop;
return arr;
};
arr.myPop();
console.log(arr);

//Push()
Array.prototype.myPush = function (value) {
let newval = [value];

    arr = arr.concat(newval);
    return arr;

};

arr.myPush(8);
console.log(arr);

//foreach()
Array.prototype.myForeach = function (value) {
for (let i = 0; i < this.length; i++) {
console.log(this[i]);
}
};
arr.myForeach();

//map()
Array.prototype.myMap = function (value) {
newArr = [];
for (let i = 0; i < this.length; i++) {
newArr.push(this[i]);
}
arr = newArr;
return arr;
};

arr.myMap();
console.log(arr);

//myfilter()
Array.prototype.myFilter = function (value) {
for (let i = 0; i < this.length; i++) {
if (this[i] === value) {
console.log(this[i]);
}
}
};
arr.myFilter(5);

//myReduce()
var a = [10, 21, 13, 56];

function add(a, b) {
return a + b;
}
function foo(a, b) {
return a.concat(b);
}

Array.prototype.reduce2 = function (f, result) {
var i = 0;
if (arguments.length < 2) {
i = 1;
result = this[0];
}
for (; i < this.length; i++) {
result = f(result, this[i], i, this);
}
return result;
};
console.log(a.reduce(add), a.reduce2(add)); // 100 100
console.log(a.reduce(add, 10), a.reduce2(add, 10)); // 110 110
// extra test with foo:
console.log(a.reduce(foo, "X"), a.reduce2(foo, "X")); // X10211356 X10211356
//
```
