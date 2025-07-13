// types aliases 
type sankhya  = number;
let n :sankhya;

// interface 
interface User {
    name : string,
    password :string,
    email :string,
    gender :string,
    phonenumber ? : number
}
// extends 
interface Admin extends User{
    fathersname : string
}
const fun = (obj:Admin) =>{
    obj.name,
    obj.gender,
    obj.email,
    obj.password,
    obj.phonenumber
    obj.fathersname
}
fun({
    name: 'chaitanya',
    password: 'password',
    email:'chaitanya@gmail.com',
    gender :'male',
    fathersname: 'Abc'
});




