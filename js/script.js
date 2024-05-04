let remove = document.querySelector('.remove')
let number = document.querySelector('.number')
let add    = document.querySelector('.add')
let i = 1


number.innerHTML = i

add.addEventListener('click' , ()=>{
    i++
    number.innerHTML = i
})
remove.addEventListener('click' , ()=>{
    if (i == 1){
        alert('1 নিচে রাখা যাবে না')
    }else{
        i--
        number.innerHTML = i
    }
})