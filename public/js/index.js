$(document).ready(function() {
    $('#mssg').hide();
$('#hh').click(function() {


    $.ajax({
        method: "POST",
        url: 'http://localhost:3000/users/login',
        header:{
            'content-Type':'application/json'
         },
       
             crossDomain:true,
         
        data: {
            "email":$("#username").val(),
            "password":$("#password").val()
        },  error: function (response) {

           alert(response.status)
             $('#mssg').show();
            },success:()=>{
                window.location="#/dashbor"

            }
        
    });

});


});