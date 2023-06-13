let details={"namee":"sony","age":"21","sex":"female","frnd":"subash"}

let {namee,age,...others}=details
console.log("name",namee)
console.log("age",age)
console.log("rest",others)

let fruits=["banana","apple","guava"]




fruits.map((data,i)=>{
console.log(data,i)
})

let i =1;

let arr = [1, 2, 3, 4, 5, 3]
arr = arr.filter((data,index) => data !== i)
console.log(arr)

let detailsnew={"namee":"sony","age":"21","sex":"female","frnd":"subash"}
console.log("prev type",typeof(detailsnew))
let stringResult = JSON.stringify(detailsnew)
console.log("String result",typeof(stringResult))
let revertJson = JSON.parse(stringResult)
console.log("after conversion",typeof(revertJson))