console.log(localStorage.getItem('9'));
getval();
function getval(){
    $("#nine").val(localStorage.getItem('9'));
    $("#ten").val(localStorage.getItem('10'));
    $("#eleven").val(localStorage.getItem('11'))
}

$('.saveBtnnine').on('click', function(e) {
 e.preventDefault();
 //hour 9 input
 var input = $('#nine').val();
 localStorage.setItem("9" ,input)
 getval();
})

console.log(localStorage.getItem('10'));

$('.saveBtnten').on('click', function(e) {
 e.preventDefault();
 //hour 10 input
 var input = $('#ten').val();
 localStorage.setItem("10" ,input)
 getval();
})

console.log(localStorage.getItem('11'));

$('.saveBtneleven').on('click', function(e) {
 e.preventDefault();
 //hour 11 input
 var input = $('#eleven').val();
 localStorage.setItem("11" ,input)
 getval();
})

// console.log(localStorage.getItem('11'));
// $("#nine").val(localStorage.getItem('11'))
// $('.saveBtnnine').on('click', function(e) {
//  e.preventDefault();
//  //hour 11 input
//  var input = $('#eleven').val();
//  inputArray.push (input)
//  localStorage.setItem("11" ,input)
// })

   $('.saveBtneleven').on('click', function(e) {
    e.preventDefault();
    var input = $('#eleven').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtntwelve').on('click', function(e) {
    e.preventDefault();
    var input = $('#twelve').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnone').on('click', function(e) {
    e.preventDefault();
    var input = $('#one').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtntwo').on('click', function(e) {
    e.preventDefault();
    var input = $('#two').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnthree').on('click', function(e) {
    e.preventDefault();
    var input = $('#three').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnfour').on('click', function(e) {
    e.preventDefault();
    var input = $('#four').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnfive').on('click', function(e) {
    e.preventDefault();
    var input = $('#five').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })