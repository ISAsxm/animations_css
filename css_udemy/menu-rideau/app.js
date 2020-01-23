var myBtn = document.getElementById('btn');

myBtn.addEventListener('click', function(e) {
    document.getElementById('my-nav').style.width = '100%';
})

var myCloseBtn = document.getElementById('close-btn');

myCloseBtn.addEventListener('click', function(e) {
    document.getElementById('my-nav').style.width = '0';
})