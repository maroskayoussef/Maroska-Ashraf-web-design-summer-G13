function addUser(id,name,balance,array){

      var person={  
        id:id,
        name:name,
        balance:balance
      }
        array.push(person)
        return person

}
var clients=[]
console.log(addUser(prompt('enter ID' ),prompt('enter name' ),prompt('enter balance' ),clients))
console.log(addUser(prompt('enter ID' ),prompt('enter name' ),prompt('enter balance' ),clients))
console.log(addUser(prompt('enter ID' ),prompt('enter name' ),prompt('enter balance' ),clients))


function editBalancebyID(ID,newBalance ,array){

   var index= array.findIndex(ele=>ele.id == ID)
   array[index].balance=newBalance
   console.log(array[index].name , "has a new balance of:", array[index].balance)
   

}
editBalancebyID(prompt('enter ID to change balance'), prompt('enter new balance'), clients)


function deleteUserbyID(ID,array){
     
       var index= array.findIndex(ele=>ele.id == ID)
        array.splice(index,1)
        console.log("client removed")

}
deleteUserbyID(prompt('enter ID to remove client'), clients)

console.log("updated list of clients:", clients)