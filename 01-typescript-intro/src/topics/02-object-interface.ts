// Interfaces, se usan para asignarle un tipo de dato a los atributos de un objeto, ya que no lo puedo definir dentro del objeto


const skills:string[] = ['Bash','Counter','Healing']

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'RIvendell';

console.table(strider);