let array=[
    {
        "id":"1",
        "marks":"19.5"
    },
    {
        "id":"2",
        "marks":"20.5"
    },
]

for(let i=0;i<array.length;i++){
    array[i].id = parseInt(array[i].id)
    array[i].marks = parseFloat(array[i].marks)
}

console.log("after shift array is",array)