

//undefined=> no parameter passed cancel=>null
//looping==> start , end , breakNum, continueNum,

//function loop(start,end,continueNum,breakNum){
  //  if(start==undefined || end==undefined ||breakNum==undefined||continueNum==undefined){
   //     alert('please enter all numbers')
  //  }

  //  else{
  //      for(var i=start; i<=end; i++){
  //          if (i==breakNum)break;
  //          else if(i==continueNum)continue;
  //          else console.log(i)
//        }
//    }
//}

//loop(1,10,3)

//loop(1,10,3,8)


 


/*function isFound(array,course){

        if(array.includes(course)){
            alert('course found')
        }
        else{
            array.push(course)
        }
        console.log(array)
    
}
var courses=["cs1","cs2","cs3"]
isFound(courses,prompt('enter course name'))*/

var coursesList=["html", "css", "js","ts", "angular"]

function eraseCourse(array, course) {
    let index = array.indexOf(course); 
    if (index !== -1) {
        array.splice(index, 1); 
        return `${course} has been removed. Updated list: ${array.join(", ")}`;
    } else {
        return `${course} not found in the list.`;
    }
}

console.log(eraseCourse(coursesList,prompt('enter courseName')))