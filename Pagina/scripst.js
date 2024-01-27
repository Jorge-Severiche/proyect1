document.addEventListener('DOMContentLoaded',function(){
    var moreButton=document.getElementById('Bmore');
    var Enlaces=document.getElementById('Enlaces');
    moreButton.addEventListener('click',function(){
        if (Enlaces.style.display=='none'){Enlaces.style.display='block';}
        else{Enlaces.style.display='none';}
    })
});