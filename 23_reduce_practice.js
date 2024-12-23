// reduce((acc,val)=>{},0);

const courses = [
    {
        name : "JS Course",
        price : 1999
    },
    {
        name : "Python Course",
        price : 999
    },
    {
        name : "Mobile Dev. Course",
        price : 5999
    },
    {
        name : "Data Science Course",
        price : 12999
    },
];

const priceToPay = courses.reduce((acc, cur_item)=> acc + cur_item.price,0);

console.log("Total price : ",priceToPay);