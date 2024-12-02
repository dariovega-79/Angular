
const name = 'Stryder';
let hpPoint: number | 'FULL' = 95;
const isAlive = true;

hpPoint = 'FULL';

console.log({
    name, hpPoint, isAlive
});



// Si no pongo el tipo de dato Typescript lo infiere.

// si no coloco el tipo de dato despues del nombre de la variable y agrego datos de otro tipo en el arreglo el tipo inferido cambia.Ej:
// let skill = ['Bash','Counter','Healing', true, 123]; -> el tipo inferido es (string | number | boolean)[]

// si quiero controlar el tipo de dato pongo: 
// let skills: string[]  = ['Bash','Counter','Healing'];
