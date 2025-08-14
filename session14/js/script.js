var courses = ['Web design', 'Web develop', 'Network', 'Mobile']



courses.forEach((item , i ) => {

    var newDiv = document.createElement('div')
    newDiv.classList.add('card')

    var cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    var h3 = document.createElement('h3')
    h3.innerText = item
    var btn = document.createElement('button')
    btn.classList.add('btn', 'btn-primary')
    btn.innerText = "Read more"
    btn.addEventListener('click' , ()=>{
        console.log(`element = ${item} , index = ${i}`)
    })
    cardBody.appendChild(h3)
    cardBody.appendChild(btn)

    newDiv.appendChild(cardBody)

    cardContainer.appendChild(newDiv)

    console.log(newDiv)
    console.log(cardBody)
    console.log(h3)
    console.log(btn)
})

