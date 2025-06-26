const myButton = document.querySelector('button')
const myInput = document.querySelector('input')
const myP = document.querySelector('p')

myButton.addEventListener('click', function(){
    myInput.style.border = '1px solid hsl(354, 100%, 66%)'
    myP.style.display = 'block'
})

myInput.addEventListener('keydown', function(event){
   if (event.key === 'Enter'){
    myInput.style.border = '1px solid hsl(354, 100%, 66%)'
    myP.style.display = 'block'
   }
})