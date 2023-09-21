//Filter
function isLong(city){
    return city.length > 5;
}
const cities = ['London', 'Bahia', 'Lisboa', 'Lima', 'Guayaquil'];
const longer = cities.filter(isLong);
console.log(longer);

//split
const data = 'Madrid, Valencia, Barcelona, Sevilla';
const citiesSplit = data.split(",");
console.log(cities.length);
console.log(citiesSplit[0]);
console.log([citiesSplit.length - 1]);

//join
const commaSeparated = citiesSplit.join(".");
console.log(commaSeparated);

//if
let groceriesShop = false;
if(groceriesShop){
console.log('You can watch netflix');
}else{
    console.log('You need to go your groceries Shop');
}