let cities = 'Cookeville, Minneapolis, Eagan, Coon Rapis';
console.log(Array.isArray(cities));

let citiesArray = cities.split(', ');
console.log(citiesArray);


const list = document.getElementById("list");
for (let i=0; i<citiesArray.length; i++){
    list.innerHTML += `<li>${citiesArray[i]}</li>`;
}


for(let city of citiesArray){
    city.toString().replaceAll(' ', '');
    // console.log(citiesArray.trim());
// console.log(citiesArray.replaceAll(' ', ''));
    if(city === 'Minneapolis'){
        console.log('the city is:' ,city)
    }
}

// citiesArray = ["", "Orange", "Apple", "Mango"];
// fruits.includes("Mango");
console.log(citiesArray.includes("Minneapolis"));


