
function addNumber(a: number, b: number):number{
    return a + b;
}

const addNumberArrow = (a:number, b:number):string => {
    return  `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number=2){
    return firstNumber * base;
}


const result = addNumber(1,2);
const result2:string = addNumberArrow(1,2);
const multiplyResult:number = multiply(5);

console.log({result}); // poner las llaves hace que lo muestre como un objeto
console.log(result2);



// interface Character {
//     name: string;
//     hp: number;
//     showHp: () => void
// }


// const healCharacter = ( character: Character, amount: number ) => {
//     character.hp += amount;
// }


// Definición de la interfaz Character
interface Character {
    name: string;
    hp: number;
    showHp(): void;
}

// Implementación del objeto strider
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

// Función para curar al personaje
function healCharacter(character: Character, healAmount: number): void {
    character.hp += healAmount;
}

// Llamadas a las funciones
healCharacter(strider, 10);
strider.showHp();
