interface Player {
    name: string,
    club: string,
    salary:number,
    wife?:string
}

const messi: Player ={
    name: 'L messy',
    club:'Abahoni',
    salary: 12000,
    wife:'nosimon begum'
}
const hannan: Player = {
    name: 'a. Hannan',
    club:'Kolabagan',
    salary:2000
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number,
}
const zuku: Developer = {
    name:'zuku',
    age: 31,
    designation:'developer',
    salary: 10000,
    language: 'js',
    codeEditor:'VS Code',
    typingSpeed: 65
}