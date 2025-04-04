//p1
let nombre="Franz";
let edad=21;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años de edad`);



//p2
let base = 5;
let altura = 3;
let area = base * altura;
console.log(`El área del rectángulo es: ${area}`);


//p3
let numero = 4;

if (numero % 2 === 0) {
    console.log(`${numero} es un número par.`);
} else {
    console.log(`${numero} es un número impar.`);
}



//p4
for (let i = 1; i <= 5; i++) {
    console.log(i);
}



//p5
function sumar(a, b) {
    return a + b;
}

console.log(sumar(3,5));



//p6
let frutas = ["manzana", "banana", "pera"];
frutas.push("uva");
console.log(frutas);





//7
const usuario = {
    nombre: "Franz", 
    edad: 21       
};

for (const key in usuario) {
    console.log(`Llave: ${key}: ${usuario[key]}`);
}




//8
let numeros = [1, 2, 3, 4];
let numerosMultiplicados = numeros.map(numero => numero * 2);

console.log(numerosMultiplicados);





//9
const restar = (a, b) => {
    return a - b;
  };
  console.log(restar(5, 3));





  //10
  const filtrarPares = (arr) => arr.filter(num => num % 2 === 0);
  console.log(filtrarPares([1, 2, 3, 4,5,6,7,8,9])); 
  
