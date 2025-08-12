// -- Dom ==> document object model 

var h1Tags = document.getElementsByTagName("h1")

console.log(h1Tags[0].innerText)
h1Tags[0].innerText = "Html"

// h1Tags.forEach((element , i) => {
//     element.innerText = `h1 element index = ${i}`
// });


for(var i = 0 ; i< h1Tags.length ; i++){
    h1Tags[i].innerText = `h1 element index = ${i}`
}


console.log(h1Tags)
var h1Element = document.getElementById('h1-element')

console.log(h1Element.innerText)

var h1Class = document.getElementsByClassName('h1-class')

console.log(h1Class)

var element = document.querySelector('.h1-class')


var elements = document.querySelectorAll('div p span')
console.log(elements)

for(var i = 0 ; i < elements.length ; i++){
    elements[i].classList.add('text-danger')
}

var h2 = document.querySelector('#h2-id')

h2.classList.remove('w-75')
h2.classList.toggle('border')
h2.classList.toggle('border-4')
h2.classList.toggle('border-primary')


h2.style.backgroundColor = "#CCCCCC";

h2.title = "Description"

function changeImg(){
    //endswith('1.jpg')

    if(img.src.includes('1.jpg')) img.src="images/2.jpg"
    else img.src="images/1.jpg"
}


function setActive(item){
     const items= document.querySelectorAll('#menu li')
    items.forEach(i=>i.style.color = 'black');
    item.style.color = 'blue';

}


