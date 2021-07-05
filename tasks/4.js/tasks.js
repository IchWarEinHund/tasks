
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}];
let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]];

// 1 Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.

const deepClone = obj => {
  if (obj === null) return null;

  let clone = Object.assign({}, obj);



  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );


  return Array.isArray(obj) && obj.length



    ? (clone.length = obj.length) && Array.from(clone)

    : Array.isArray(obj)

    ? Array.from(obj)

    : clone;
};



const a = deepClone(testData);
const b = deepClone(testData2);
const c = deepClone(testData3);
const d = deepClone(testData4);


//2 Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

let reduceConcat = testData1.reduce((acc, val) => acc.concat(val), []);

//3 Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.

function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
    var x;
    while(!x) {
        try {
            x = primitiveMultiply(a, b);
        } catch(error) {
            if (!error instanceof MultiplicatorUnitFailure) {
                throw error;
            }
        }
    }
    return x;
}

console.log(reliableMultiply(8, 8));




//4 Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

var arr = [1, 2, 3];

arr.splice(0, 0, 0);
console.log(arr);
//[0, 1, 2, 3]



//5 Выведите все элементы массива используя рекурсию.



var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recuseLog(arr) {
  if (arr.length > 0) {
    console.log(arr.shift());
    recuseLog(arr);
  }
}
recuseLog(arr);



//6
/*как я понимаю, эту задачу можно решить с помощью setTimeout, но не могу это реализовать т.к. не сталкивался
с парралельными (многопоточностью) вычислениями в JS*/
