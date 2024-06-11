/*

// ASINCRONIA:

console.log('Primer console LOG');
console.log('Segundo console LOG');

// CONSUMO DE SERVICIOS:

alert('Soy un consumo de servicio');

console.log('Tercer console LOG');
console.log('Cuarto console LOG');


*/

//ASINCRONIA

//COMO REALIZAR PETICIONES


// COMO MANEJAR DATA

const data = fetch ('https://jsonplaceholder.typicode.com/users');

//console.log(data);

data
    .then((res) => {
    return res.json();
    //console.log(res);
})

.then((info) => {
    info.forEach((user) =>{
        console.log(user.name);
    })
    //console.log(info);
});

