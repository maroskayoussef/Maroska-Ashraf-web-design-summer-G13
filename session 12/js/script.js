function sum(num1, num2){
    return num1+num2
}

var result = sum(100,10)


function getUserID(part1, part2=102){
    return `${part1}-${part2}`
}

var userID=getUserID('305')
//console.log(userID)

function looping(){
    for (var i =0; i<=10; i++){
        console.log(i)
    }
}


//looping==> start , end , breakNum, continueNum,

function loop(start,end,breakNum,continueNum){
    if(start==null || end==null ||breakNum==null||continueNum==null){
        alert('please enter all numbers')
    }

    else{
        for(var i=start; i<=end; i++){
            if (i==breakNum)break;
            else if(i==continueNum)continue;
            else console.log(i)
        }
    }
}

loop(1,5,4,3)

var firstname;
function username(firstname, lastname){
    firstname="me"
    username="last"
    //var username="a" cannot be accessed outside function scope
}
//function statement calling the function from a variable var user= getusername(); console.log(user)

//function expression
 var FullUserNmae=function(){
    return"maroska"
 }
 console.log(FullUserNmae())

 //arrow fucntion 
 var compOperator = (num)=>{
    return(num>20)
 }

 //or 
 var compOperator = (num)=> num>20
 console.log(compOperator(40))

 userInfo["maroska",21]
 userInfo(userInfo.length)="cs"
 userInfo.push("cs");

 userInfo.unshift(false)//ADDs to the start of the array

console.log(userInfo)
console.log(userInfo.includes("cs"))

userInfo.pop() //removes from the end
userInfo.shift()//removes from the start

userInfo.splice(1,0,"sara")//mn index 1 remove no elements and add sara

//for looping without for loop
userInfo.array.forEach((element,i,arr) => {
    console.log(element)
});