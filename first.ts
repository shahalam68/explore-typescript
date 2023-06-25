let money:number = 5;
let honey:string = 'Hi baby';
let funny: boolean = true;
const age:number = 21;



function add(first:number, second:number):number{
    const result = first + second;
    return result;  
}


// multipurpose
function add2(first:number | string, second:number | string):string{
    const result = first + second;
    return result + '';  
}

function doubleConsole ( number:number){
    console.log(2*number);
}

const output:number = add(45,37);
const fullName = add2('adam','send');