const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

//  
var timer;

var ele = document.getElementById('timer');

(function (){
var sec = 0;
timer = setInterval(()=> {
  ele.innerHTML = '00:'+sec;
  sec ++;
}, 1000)
})
//



  

$('#select-all').click(function(event) {   
    if(this.checked) {
        // Iterate each checkbox
        $(':checkbox').each(function() {
            this.checked = true;                        
        });
    } else {
        $(':checkbox').each(function() {
            this.checked = false;                       
        });
    }
}); 


function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "images/page22.png"){
        document.getElementById("imgClickAndChange").src = "images/page22.png";
    } else {
        document.getElementById("imgClickAndChange").src = "images/page11.png";
    }
};
function chaImg() {
    if (document.getElementById("imgClick").src == "images/page22.png"){
        document.getElementById("imgClick").src = "images/page22.png";
    } else {
        document.getElementById("imgClick").src = "images/page11.png";
    }
}
