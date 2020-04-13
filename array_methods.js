const items = [
    {name: 'Bike',     price: 100},
    {name: 'TV',       price: 200},
    {name: 'Album',    price: 10},
    {name: 'Book',     price: 5},
    {name: 'Phone',    price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
    {name: 'House',    price: 1000},
]

// Filter
const filteredItems = items.filter((item) =>{
    return item.price < 100
})

console.log(filteredItems);
// console.log(items) //not changed

// Map
const itemsNames = items.map((item)=>{
    return item.name
})

console.log(itemsNames) // Same size as the original array

// Find --> Can be replaced by .includes
const foundItems = items.find((item)=>{
return item.name ==='Book'
})

console.log(foundItems) // Returns the first occurence

// forEach --> Takes a function 
const exaggeratedPrices = []
items.forEach((item)=>{
    exaggeratedPrices.push(item.price*10)
})

console.log(exaggeratedPrices)

// some : condition on first occurence
const hasInexpensiveItems = items.some((item)=>{
    return item.price <= 100
})
console.log(hasInexpensiveItems);

// every: condition on all occurences
const hasExpensiveItems = items.every((item)=>{
    return item.price > 3000
})
console.log(hasExpensiveItems);

// Reduce
const totalPrice = items.reduce((currentTotal ,item)=>{
    return item.price + currentTotal
}, 0)
console.log(totalPrice);

