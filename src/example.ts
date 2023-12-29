let firstName:string = "manish"

let count:number = 0

let isLoading:boolean = true

let numbers:any

let num:undefined = undefined

let age:null|string = null
  //  age= "manish" iscalled union type


const user:{name:string, age:number,id?:number} = {
  name: "manish",
  age: 25,
  id: 1
}

// array?

const fruits:string[] = ["banana", "apple", "orange"]
const numarray:number[] = [1,2,3,4,5,6]
const users:{id:number, name:string}[] = [{id:1, name: "manish"},{id:2, name: "manish"}]

// function 
const sum=(a:number,b:number)=>{
  return a+b
}
sum(1,2)

 
// api responce method 

const handleApiResponce= (payload:{usesrId:number} ,callback:(a:number,b:number)=>void)=>{
}


// interface

interface Person{
  department:string
}

interface User extends Person{
  name:string,
  id:number,
  getUser:()=>void
}

let userr:User={
  name:"manish",
  id:1,
  getUser:()=>{

  },
  department: "ceo"
}



// type

type employee={
  id:1,
  name:string

}

type manager={
  department:string
} &employee


let employeewithmanager:manager={
  department:"A",
  id:1,
  name:"manish"
}