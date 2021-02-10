var employee = []

employee[0] = {
 name : "priya",
 age : 25,
 salary: 500,
 birthdate:"April 30, 1996"
}

employee[1] = {
 name : "sam",
 age : 26,
 salary: 30000,
birthdate:"July 5, 1996"
}

employee[2] = {
 name : "josh",
 age : 25,
 salary: 26000,
birthdate:"Octuber 30, 1995"
}

employee[3] = {
name : "bruce",
age : 21,
salary: 800,
birthdate:"April 7, 2000"
}

// fetch employee with salary < 1000 and age > 20 give them increment 5*salary

function fetch(employee){
    for(var i = 0; i<employee.length; i++){
        if(employee[i].salary < 1000 && employee[i].age>20){
            employee[i]["salary"] *= 5 
        }
    }
    console.log(employee)
} 

// filter all with salary greater then 5000

function fet(employee){
    for(var i = 0; i<employee.length; i++){
        if(employee[i].salary > 5000 ){
           console.log(employee[i]["name"])  
        }
    }
    console.log(employee)
} 

// group employee on basis of their age

function feth(employee){
    for(var i = 0; i<employee.length; i++){
        if(employee[i].age === 25 ){
           console.log(employee[i]["name"])  
        }
    }
    console.log(employee)
} 