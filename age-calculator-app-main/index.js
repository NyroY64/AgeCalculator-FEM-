const submite=document.querySelector('button');

submite.addEventListener('click',function () {
    let generalDate=document.querySelectorAll('.date') ;
    let date =Array.from(generalDate).map(input => parseInt(input.value));


    let result=new Date(date[0],date[1],date[2]);
    console.log(result);
})










