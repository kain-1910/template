var search = document.querySelector('input.search')

// var formTable = document.querySelector('.search_box form')


var searchIcon = document.querySelector('.search_box input[type="button"]')
var check = /\d[A-Za-z0-9]{3,26}$/

var result = check.test(search.value)
searchIcon.addEventListener("click", () => {

    if(search.value.length == 0) alert('Phạm Văn Công')
    else{
        if(!result){
            alert("211202991- 122102")
            search.focus()
        }
        else alert('hahaha')
    } 
})