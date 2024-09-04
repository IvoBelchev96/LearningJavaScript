"strict mode"



function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

console.log(describeCountry("Bulgaria", 6, "Sofia"))
console.log(describeCountry("Czech Republic", 8, "Prague"))


function percentageOfWorld1(population) {
    return (population / 7900) * 100
}


// const Nicaragua = percentageOfWorld1(400);

// const Philipines = percentageOfWorld1(300);
// const Jamaica = percentageOfWorld1(100);

// console.log(Nicaragua, Philipines, Jamaica)


// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100
// }


// const percentageOfWorld3 = population => (population / 7900) * 100;
// const Nicaragua3 = percentageOfWorld3(400);

// const Philipines3 = percentageOfWorld3(300);
// const Jamaica3 = percentageOfWorld3(100);
// console.log(Nicaragua3, Philipines3, Jamaica3);

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    console.log(description);
};

describePopulation("Nicaragua", 400);
describePopulation("Philipines", 300);
describePopulation("Jamaica", 100);