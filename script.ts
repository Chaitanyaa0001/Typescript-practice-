

let a : number;
a = 12;
// we can't do this beacause a is define as number 
// a = 'chaitanya'

let b : [number,string] = [12,'harsh'];

// but we can dot this 
// let c : [number,string] = ['harsh',12]; 

enum statuscode  {
    SERVER  =  500,
    NOT_FOUND = 404,
};

statuscode.SERVER;

//  type any 
let x; 
// type unknown in this we can put this but while developing we have to always define weather it's a string or what 
let y :unknown;
y = 10;
y ='harsh';
if(typeof y === 'string'){
    y.toUpperCase();
}

// it is undifined 
let z:undefined;
// void  it restun nothing 
function  abcd() :void{
    console.log("helo ");
   //  return 12 ;  here if we wil return number then it will show error beacue void never return any int 
    
}