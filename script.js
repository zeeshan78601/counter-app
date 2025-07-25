let countbtn = document.getElementById('count')
countbtn.addEventListener('click',()=>{
    let p = document.getElementById('para')
   let currentvalue = Number(p.innerText)
   p.innerText = currentvalue + 1

})

