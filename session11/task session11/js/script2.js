
var score= prompt('enter your grade');

if(score==null || score>=100){
    console.log("enter a valid score")
}
else if(score>=90 ){
    console.log("A")
}
else if(score>=80){
    console.log("B")

}
else if(score>=70){
    console.log("c")

}
else if(score<70){
    console.log("F")

}